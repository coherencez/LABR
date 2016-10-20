'use strict'
const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
  // userId pulled from User collection
  userId: {
    type: String,
    required: true,
  },
  providerId: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  active: {
    type: Boolean,
    default: false,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})



module.exports = mongoose.model('Provider', jobSchema)
