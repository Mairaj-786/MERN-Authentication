const express = require('express');
const router = express.Router();
const { register, login, loginValidation } = require('../controller/user');



router.post('/register', register)
router.post('/login', loginValidation, login)

module.exports = router;