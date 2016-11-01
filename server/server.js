'use strict'

const        app = require('express')()
  ,     { json } = require('body-parser')
  ,  { connect } = require('./db/database')
  ,            _ = require('lodash')
  ,         PORT = process.env.PORT || 3000
// database models
  ,         User = require('./models/User')
  ,     Provider = require('./models/Provider')
  ,          Job = require('./models/Job')

// only send or receive json
app.use(json())

app.get('/', (req,res) =>
  res.json({status: 200})
)

app.post('/labr/api/newuser', ({ body }, res, err) => {
  User.findOne({ email: body.email })
    .then(user => {
      if(user) {
        return res.json({ msg: 'That email already exists, please try again!'})
      }
      else return User.create(body)
    })
    .then(newUser => res.json({ status: 200 }))
    .catch(console.error)
})

app.post('/labr/api/login', ({ body: { email, password } }, res, err) => {
  User.findOne({ email })
    .then(dbUser => {
      if(dbUser) {
        return Promise.all([
          Promise.resolve(dbUser),
          dbUser.comparePassword(password)
        ])
      } else {
        return res.json({ msg: 'Bad email and/or password. Please try again'})
      }
    })
    .then(([user, matches]) => {
      const { _id, firstName, lastName, cellPhone, email, isProvider } = user
      const userObj = { id: _id, firstName, lastName, cellPhone, email, isProvider }

      if(matches) {
        if(user.isProvider) {
          return Promise.all([
            Promise.resolve(userObj),
            Provider.findOne({ userId: user._id })
          ])
        }
        return res.json({ pwMatch: true, user: userObj })
      }
      return res.json({ pwMatch: false,  msg: 'Bad email and/or password. Please try again' })
    })
    .then(([user, provider]) => {
      const userObj = Object.assign({}, user, { provider })
      return res.json({ pwMatch: true, user: userObj })
    })
    .catch(console.error)
})

app.post('/labr/api/newprovider', ({ body },res) => {
  Provider.create(body)
    .then(provider => {
      return Promise.all([
        User.findOneAndUpdate(
          {_id: body.userId},
          {isProvider: true}
        ),
        Promise.resolve(provider)
      ])
    })
    .then(([updatedUser, provider]) => {
      res.json({isProvider: true, provider})
    })
    .catch(console.error)
})

app.post('/labr/api/available', ({ body: { _id, available }},res) => {
  Provider.findOneAndUpdate(
      {_id},
      {available},
      {new: true}
    )
    .then(provObj => {
      if(provObj) {
        return res.json({ status: 200 })
      }
    })
    .catch(console.error)
})

app.get('/labr/api/getProviders', (req,res) => {
  Provider.find()
    .then(providers => {
      res.json({ providers })
    })
    .catch(console.error)
})

app.post('/labr/api/newjob', ({ body }, res) => {
  Promise.resolve(body)
    .then(jobReqObj => {
      return Promise.all([
        Promise.resolve(jobReqObj),
        User.findOne({_id: jobReqObj.provider.userId})
      ])
    })
    .then(([jobReqObj, providerContact]) => {
      // password omit still not working ????
      // not only is this not working, it is causing a buffer overflow
      // RangeError to happen
      // const newProvContactObj = _.omit(providerContact, ['password'])
      const         newJobObj = _.omit(jobReqObj, ['provider'])
      const      newJobReqObj = Object.assign({}, newJobObj, {providerContact})

      return Job.create(newJobReqObj)
    })
    .then(jobObj => {
      if(jobObj) {
        return res.json({ status: 200 })
      }
      return res.json({ status: 400, msg: 'Oh no! An Error occured'})
    })
    .catch(console.error)
})

app.post('/labr/api/jobs', ({ body },res) => {
  Promise.resolve(body)
    .then(({ isProvider, id }) => {
      if(isProvider) {
        return Job.find({ providerId: id }).where({ completed: false })
      }
      return Job.find({ userId: id }).where({ completed: false })
    })
    .then(jobs => {
      if(jobs) {
        res.json({ jobs })
      }
    })
    .catch(console.error)
})

app.post('/labr/api/acceptjob', ({ body: { _id } },res) => {
  Job.findOneAndUpdate(
      {_id},
      {active: true, startDate: new Date().toString()},
      {new: true}
    )
    .then(data => {
      if(data) res.json({ status : 200, job: data })
      else res.json({ status: 400 })
    })
    .catch(console.error)
})

app.post('/labr/api/completejob', ({ body: { _id } },res) => {
  Job.findOneAndUpdate(
      {_id},
      {completed: true, active: false, endDate: new Date().toString()},
      {new: true}
    )
    .then(data => {
      if(data) res.json({ status : 200, job: data })
      else res.json({ status: 400 })
    })
    .catch(console.error)
})

app.post('/labr/api/canceljob', ({ body: { _id } },res) => {
  Job.findOneAndRemove({ _id })
    .then(data => {
      if(data) res.json({ status : 200, job: data })
      else res.json({ status: 400 })
    })
    .catch(console.error)
})

// connect to mongo before loading server
connect()
  .then(() =>
    app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`))
  ).catch(console.error)
