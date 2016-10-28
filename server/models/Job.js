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
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
    default: ''
  }
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  startDate: {
    type: Date,
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



module.exports = mongoose.model('Job', jobSchema)
