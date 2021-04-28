const createUser = require('../controllers/auth-ctrl');

const express = require("express");

const router = express.Router();

router.post('/auth/signup', createUser);

module.exports = router;