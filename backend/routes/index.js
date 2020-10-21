var express = require('express');
const authRouter = require('./auth.js');
var router = express.Router();

router.use('/auth', authRouter);

module.exports = router;
