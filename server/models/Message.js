'use strict'
const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  jobId: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
    default: Date.now
  },
  text: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    required: true,
    default: false,
  },
})



module.exports = mongoose.model('Message', messageSchema)
