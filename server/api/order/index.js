'use strict';

var express = require('express');
var controller = require('./order.server.controller.js');

var router = express.Router();

router.get('/', controller.find);
router.get('/:id', controller.findById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.remove);

router.param('id', controller.decorateRequestWithOrder);

module.exports = router;
