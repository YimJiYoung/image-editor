const express = require('express');
const authRouter = require('./auth');
const projectRouter = require('./project');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/projects', projectRouter);

module.exports = router;
