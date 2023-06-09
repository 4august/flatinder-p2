'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const authService = require('../services/auth-service');
const upload = require('../config/multer');

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.post('/user-photo', upload.single('picture') ,controller.createPhoto);

module.exports = router