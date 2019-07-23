const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

// Route to Create/Signup account...
router.post('/v1/api/signup', controller.createAccount);

module.exports = router;