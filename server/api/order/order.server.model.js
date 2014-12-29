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

OrderSchema
.pre('save', true, function (next, done) {
    next();

    var order = this;
    order._user = order._user._id ? order._user._id : order._user;

    done();
  });

OrderSchema
  .pre('save', true, function (next, done) {
    next();

    var order = this;
    order._dish = order._dish._id ? order._dish._id : order._dish;

    done();
  });

module.exports = mongoose.model('Order', OrderSchema);
