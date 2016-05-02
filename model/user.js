'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  authentication: {
    email: { type: String },
    password: { type: String, require: true }
  },
  zipcode: { type: Number }
});

userSchema.methods.generateHash = function(password) {
  var hash = this.authentication.password = bcrypt.hashSync(password, 8);
  return hash;
};

userSchema.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.authentication.password);
};

userSchema.methods.generateToken = function() {
  return jwt.sign({ idd: this._id }, process.env.APP_SECRET);
};

module.exports = exports = mongoose.model('user', userSchema);
