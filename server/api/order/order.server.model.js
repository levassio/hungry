'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  _user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },

  _dish: {
    type: Schema.ObjectId,
    ref: 'Dish',
    required: true
  },

  comment: String,

  isPaid: {
    type: Boolean, default: false
  },

  _session: {
    type: Number, default: 1
  }
});

module.exports = mongoose.model('Order', OrderSchema);
