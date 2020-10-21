var express = require('express');
var path = require('path');
const session = require('express-session');
var logger = require('morgan');
const passport = require('passport');
const { sequelize } = require('./models');
const passportConfig = require('./modules/passport');
var router = require('./routes');

var app = express();
sequelize.sync();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use('/', router);

module.exports = app;
