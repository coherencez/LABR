'use strict'

const        app = require('express')()
  ,   bodyParser = require('body-parser')
  ,  { connect } = require('./db/database')
  ,         PORT = process.env.PORT || 3000

// only send or receive json
app.use(bodyParser.json())

app.get('/', (req,res) =>
  res.json({status: 200})
)

app.post('/labr/api/newuser', (req, res) => {
  console.log(req.body)
})

// connect to mongo before loading server
connect()
  .then(() =>
    app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`))
  ).catch(console.error)
