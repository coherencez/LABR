'use strict'
const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  user: {
    type: Object,
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }

  }
})



module.exports = mongoose.model('Message', messageSchema)
