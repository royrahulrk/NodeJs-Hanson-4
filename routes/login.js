const express = require('express');
const router = express.Router();
const {userLoginController} = require('../controllers/login');

router.post('/login', userLoginController);

module.exports = router;