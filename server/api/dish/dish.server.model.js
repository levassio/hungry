'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DishSchema = new Schema({
  name: {
    type: String, required: true
  },
  price: {
    type: Number, required: true
  },
  active: {
    type: Boolean, default: true
  }
});

module.exports = mongoose.model('Dish', DishSchema);
