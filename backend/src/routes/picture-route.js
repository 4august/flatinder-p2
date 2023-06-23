'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');
const authService = require('../services/auth-service');

const upload = require('../config/multer')

router.post('/', upload.single("photo"), controller.createPhoto);

module.exports = router