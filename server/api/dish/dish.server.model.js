'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Order = require('../order/order.server.model.js');

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

DishSchema
  .pre('remove', function (next) {
    Order.remove({ _dish: this._id }, function (err) {
      next(err);
    });
  });

module.exports = mongoose.model('Dish', DishSchema);
