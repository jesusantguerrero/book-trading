const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const passport = require('./../utils/passport');

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/'
}))

router.post('/register', passport.authenticate('local-singup', {
  successRedirect: '/',
  failureRedirect: '/'
}))

router.get('/logout', (req, res) => {

})

module.exports = router;