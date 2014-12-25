'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DishSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  active: Boolean
});

module.exports = mongoose.model('Dish', DishSchema);
