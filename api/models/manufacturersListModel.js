/* eslint-disable */
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var manufacturersListSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  information: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  image: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
});

module.exports = mongoose.model('Manufacturers', manufacturersListSchema);