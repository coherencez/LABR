'use strict'
const { compare, hash } = require('bcrypt')
const mongoose = require('mongoose')

const BCRYPT_DIFFICULTY = 15
const HTML5_EMAIL_VALIDATION = /^[a-zA-Z0-9.!#$%&’*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PW_MAX_LENGTH = [250, 'The value of path `{PATH}` (`{VALUE}`) exceeds the maximum allowed length ({MAXLENGTH}).']
const HTML5_PHONE_VALIDATION = /(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}/

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    require: true,
  }
	email: {
		type: String,
		required: true,
		lowercase: true,
		match: [HTML5_EMAIL_VALIDATION, 'Please fill in a valid email address'],
		index: {unique: true}
	},
  cellPhone: {
    type: String,
    match: [HTML5_PHONE_VALIDATION, 'Please provide a valid phone number'],
    required: true,
  },
	password: {
    type: String,
    maxLength: PW_MAX_LENGTH,
    required: [true, 'Please enter a password longer than you think you need'],
  },
  isProvider: {
    type: Boolean,
    required: true,
    default: false,
  },
})

userSchema.pre('save', function(cb) {
	const user = this
	hash(user.password, BCRYPT_DIFFICULTY, (err, hashedPassword) => {
		if(err) { return cb(err) }
		user.password = hashedPassword
		cb()
	})
})

userSchema.statics.findOneByEmail = function (email, cb) {
	const collection = this
	return collection.findOne({email}, cb)
}

userSchema.methods.comparePassword = function(password, cb) {
	const user = this
  // support calback and `Promise` pattern
	if(typeof cb === 'function') {
		return comparePassword(password, user.password, cb)
	}

	return new Promise((resolve, reject) => {
		compare(password, user.password, (err, matches) => {
			err ? reject(err) : resolve(matches)
		})
	})
}

module.exports = mongoose.model('User', userSchema)
