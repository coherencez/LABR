'use strict'

const        app = require('express')()
  ,     { json } = require('body-parser')
  ,  { connect } = require('./db/database')
  ,         PORT = process.env.PORT || 3000
// database models
  ,         User = require('./models/User')
  ,     Provider = require('./models/Provider')

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

app.post('/labr/api/login', ({ body }, res, err) => {
  User.findOne({ email: body.email })
    .then(dbUser => {
      // problem: need send user data back to the app, also
      // need to compare passswords which returns another promise
      // solution: Promise.all: if user exists, run comparePassword schema method
      // then pass the user obj and compare results to the next
      // then block
      if(dbUser) {
        return Promise.all([
          Promise.resolve(dbUser),
          dbUser.comparePassword(body.password)
        ])
      } else {
        return res.json({ msg: 'Bad email and/or password. Please try again'})
      }
    })
    .then(([user, matches]) => {
      const { _id, firstName, lastName, cellPhone, email, isProvider } = user
      const userObj = {
        id: _id,
        firstName,
        lastName,
        cellPhone,
        email,
        isProvider
      }
      if(matches) {
        if(user.isProvider) {
          return Promise.all([
            Provider.findOne({ userId: user._id }),
            Promise.resolve(userObj),
          ])
        }
        return res.json({ pwMatch: true, user: userObj })
      }
      return res.json({ pwMatch: false,  msg: 'Bad email and/or password. Please try again' })
    })
    .then(([provider, user]) => {
      const userObj = Object.assign({}, user, {providerId: provider._id})
      return res.json({ pwMatch: true, user: userObj })
    })
    .catch(console.error)
})

app.post('/labr/api/newprovider', ({ body },res) => {
  Provider.create(body)
    .then(data => {
      User.findOneAndUpdate(
        {_id: body.userId},
        {isProvider: true}
      )
      .then(updatedUser => {
        res.json({isProvider: true, providerId: data._id})
      })
      .catch(console.error)
    })
    .catch(console.error)
})

// connect to mongo before loading server
connect()
  .then(() =>
    app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`))
  ).catch(console.error)
