const express = require('express');
const authCtrl = require('./authController');

const auth = express.Router();

auth.post('/signup', authCtrl.signup);
auth.post('/login', authCtrl.login);

module.exports = auth;