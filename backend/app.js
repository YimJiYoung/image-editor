const express = require('express');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const logger = require('morgan');
const passport = require('passport');
const { sequelize } = require('./models');
const passportConfig = require('./modules/passport');
const router = require('./routes');

const app = express();
sequelize.sync();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

passportConfig();

app.use('/', router);

module.exports = app;
