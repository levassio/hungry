'use strict';

var _ = require('lodash');
var Dish = require('./dish.server.model.js');

exports.decorateRequestWithDish = function (req, res, next, id) {
  Dish.findById(id)
    .exec(function (err, entity) {
      if (err) {
        next(err);
      } else if (!entity) {
        res.send(404);
      } else {
        req.decoratedDish = entity;
        next();
      }
    });
};

exports.find = function (req, res, next) {
  Dish.find().exec(function (err, entities) {
    if (err) {
      next(err);
    } else {
      res.json(200, entities);
    }
  });
};

exports.findById = function (req, res) {
  res.json(200, req.decoratedDish);
};

exports.create = function (req, res, next) {
  Dish.create(req.body, function (err, entity) {

    //todo: set user to logged in user
    //todo: see if dish is set correctly here

    if (err) {
      next(err);
    } else {
      res.json(201, entity);
    }
  });
};

exports.update = function (req, res, next) {
  if (req.body._id) {
    delete req.body._id;
  }

  var updated = _.extend(req.decoratedDish, req.body);

  updated.save(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(200, updated);
    }
  });
};

exports.remove = function (req, res, next) {
  req.decoratedDish.remove(function (err) {
    if (err) {
      next(err);
    } else {
      res.send(204);
    }
  });
};
