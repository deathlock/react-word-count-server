'use strict';

// Adding Packages
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
Word Schema
*/
var WordSchema = new Schema({
  word:{
    type: String,
    trim: true
  },
  count:{
    type: Number
  },
  created_at:{
    type: Date,
    default: Date.now
  }
});

mongoose.model('Word', WordSchema); // Defining Model
