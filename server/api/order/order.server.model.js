'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  _user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  _dish: {
    type: Schema.ObjectId,
    ref: 'Dish'
  },
  comment: String,
  orderDate: Date
});

module.exports = mongoose.model('Order', OrderSchema);
