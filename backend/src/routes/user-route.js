'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const authService = require('../services/auth-service');

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
// router.put('/like/:userId', controller.likeUser);
// router.put('/:id', controller.put);
// router.delete('/', controller.delete)

module.exports = router