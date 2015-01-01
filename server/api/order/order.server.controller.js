'use strict';

var _ = require('lodash');
var Order = require('./order.server.model.js');

exports.decorateRequestWithOrder = function (req, res, next, id) {
  Order.findById(id)
    .exec(function (err, order) {
      if (err) {
        next(err);
      } else if (!order) {
        res.send(404);
      } else {
        req.decoratedOrder = order;
        next();
      }
    });
};

exports.find = function (req, res, next) {
  Order.find().exec(function (err, orders) {
    if (err) {
      next(err);
    } else {
      res.json(200, orders);
    }
  });
};

exports.findById = function (req, res) {

  //todo: validate order is okay to see by the user

  res.json(200, req.decoratedOrder);
};

exports.create = function (req, res, next) {
  Order.create(req.body, function (err, order) {

    //todo: set user to logged in user
    //todo: see if dish is set correctly here

    if (err) {
      next(err);
    } else {
      res.json(201, order);
    }
  });
};

exports.update = function (req, res, next) {

  if (req.decoratedOrder._user != req.body._user) {
    return res.status(400).send({
      message: "Not allowed to change user"
    });
  }

  if (req.body._id) {
    delete req.body._id;
  }

  var updated = _.extend(req.decoratedOrder, req.body);

  updated.save(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(200, updated);
    }
  });
};

exports.remove = function (req, res, next) {
  req.decoratedOrder.remove(function (err) {
    if (err) {
      next(err);
    } else {
      res.send(204);
    }
  });
};
