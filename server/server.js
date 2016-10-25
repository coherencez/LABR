'use strict'

const        app = require('express')()
  ,     { json } = require('body-parser')
  ,  { connect } = require('./db/database')
  ,         PORT = process.env.PORT || 3000
// database models
  ,         User = require('./models/User')

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
      if(!dbUser) {
        return res.json({ msg: 'User not found'})
      }
      else return dbUser.comparePassword(body.password)
    })
    .then(matches => {
      if(matches) {
        return res.json({ pwMatch: true })
      }
      return res.json({ pwMatch: false,  msg: 'Password incorrect, please try again!' })
    })
    .catch(console.error)
})

// connect to mongo before loading server
connect()
  .then(() =>
    app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`))
  ).catch(console.error)
