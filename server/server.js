'use strict'

const        app = require('express')()
  ,   bodyParser = require('body-parser')
  ,         PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/', (req,res) =>
  res.json({status: 200})
)

app.listen(PORT, () => console.log(`Now listening on ${PORT}`))
