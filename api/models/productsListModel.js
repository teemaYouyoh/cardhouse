'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductListSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  manufacturer: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  price: {
    type: Number,
    required: 'Kindly enter the name of the task'
  },
  country: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  image: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
});

module.exports = mongoose.model('Products', ProductListSchema);