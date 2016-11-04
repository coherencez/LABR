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
  ,      Message = require('./models/Message')
  ,   { Twilio } = require('./utilities/Twilio')
  , { to, from } = require('./utilities/secret').twilioCreds
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
          dbUser,
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
            userObj,
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
        provider
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
  Promise.all([
        body,
        User.findOne({_id: body.provider.userId})
      ])
    .then(([jobReqObj, providerContact]) => {
      const newJobReqObj = Object.assign({}, jobReqObj, {providerContact})

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

app.post('/labr/api/jobshistory', ({ body },res) => {
  Promise.resolve(body)
    .then(({ isProvider, id }) => {
      if(isProvider) {
        return Job.find({ providerId: id }).where({ completed: true })
      }
      return Job.find({ userId: id }).where({ completed: true })
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
      if(data) {
        Twilio.messages.create({
            to,
            from,
            body: `Your ${data.category} job has just been accepted by ${data.providerContact.firstName} ${data.providerContact.lastName}. They will be on the way soon!`
        }, function(err, message) {
            console.log(message.sid);
        })
        res.json({ status : 200, job: data })
      } else {
         res.json({ status: 400 })
      }
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

app.post('/labr/api/getmessages', (req,res) => {
  Message.find()
    .then(data => {
      console.log(data)
      res.json({messages: data[0].messages})
    })
    .catch(console.error)
})

app.post('/labr/api/message', (req,res) => {
  // Message.create(req.body)
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(console.error)
  console.log(req.body)
    Message.findByIdAndUpdate(
        {_id: `581aba8873fb656143cc8440`},
        {$push: {"messages": req.body}},
        {safe: true, upsert: true, new : true}
      )
      .then(data => {
        console.log(data)
        res.status(201).json({status: 201})
      })
      .catch(console.error)
})

// connect to mongo before loading server
connect()
  .then(() =>
    app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`))
  ).catch(console.error)
