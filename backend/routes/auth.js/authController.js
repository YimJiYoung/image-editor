const bcrypt = require('bcrypt');
const passport = require('passport');
const { User } = require('../../models');

exports.signup = async (req, res, next) => {
  const { email, name, password } = req.body;
  try {
    const existUser = await User.findOne({ where: { email } });
    if (existUser) {
      res.status(409).json({ ok: false, message: 'already exists' });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    await User.create({ email, password: hash, name });
    res.json({ ok: true });
  } catch (err) {
    next(err);
  }
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ ok: false, ...info });
    req.logIn(user, (loginErr) => {
      if (loginErr) next(loginErr);
      res.json({ ok: true, user: req.user });
    });
  })(req, res, next);
};
