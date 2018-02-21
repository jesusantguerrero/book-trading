const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./../models/user');

passport.use(new LocalStrategy((email, password, done) => {
    User.model.findOne({ email: email }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

module.exports = passport;