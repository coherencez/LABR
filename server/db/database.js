'use strict'
const mongoose = require('mongoose')
const      URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/LABR'

// set mongoose to use ES6 Promises
mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(URI)
module.exports.disconnect = () => mongoose.disconnect()
