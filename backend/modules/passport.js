const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findOne({ where: { email } });
            done(null, user);
        } catch(err) {
            done(err);
        }
    });
    
    passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        const isSamePassword = await bcrypt.compare(password, user.password);
        if (!isSamePassword) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }));
}