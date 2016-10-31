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
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
    default: 'blank'
  },
  createdDate: {
    type: String,
    required: true,
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
  },
  userContact: {
    type: Object,
    required: true,
  },
  providerContact: {
    type: Object,
    required: true,
  }
})



module.exports = mongoose.model('Job', jobSchema)
