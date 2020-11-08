const express = require('express');
const projectCtrl = require('./projectController');

const router = express.Router();

router.get('/', projectCtrl.list);

module.exports = router;
