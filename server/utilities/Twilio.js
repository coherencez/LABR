'use strict'
const { accountSid, authToken, to, from } = require('./secret').twilioCreds
module.exports.Twilio = require('twilio')(accountSid, authToken)
