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

passport.use('local-singup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true

}, (req, email, password, done)=> {
  process.nextTick(() => {
    User.register({ email, password })
      .then((user) => {
        if(user) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
  })
}))


passport.serializeUser((user, done)  => {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser((id, done) => {
  User.model.findById(id, (err, user) => {
      done(err, user);
  });
});


module.exports = passport;