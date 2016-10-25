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
      return User.create(body)
    })
    .then(({email, cellPhone, _id}) => {
      const userObj = {
        email,
        cellPhone,
        id: _id
      }
      res.json({ status: 200, user: userObj, msg: 'A OKAY'})
    })
    .catch(console.error)
})

// connect to mongo before loading server
connect()
  .then(() =>
    app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`))
  ).catch(console.error)
