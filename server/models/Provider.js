'use strict'
const mongoose = require('mongoose')

const providerSchema = mongoose.Schema({
  // userId pulled from User collection
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  categories: {
    type: Array,
    required: true,
    default: []
  },
  skills: {
    type: Array,
    required: true,
    default: []
  },
  experience: {
    type: String,
    required: true,
  },
  rate: {
    type: String,
    required: true,
  },
  flexible: {
    type: Boolean,
    required: true,
    default: false
  },
  bio: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
    default: false,
  },
  profilePic: {
    type: String,
    required: true,
    default: '',
  },
})



module.exports = mongoose.model('Provider', providerSchema)
