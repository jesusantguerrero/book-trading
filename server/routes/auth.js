const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const passport = require('./../utils/passport');

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/'
}))

router.post('/register', (req, res) => {
  console.log(req.body);
  User.register(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).json({error: err});
    })
})

router.get('/logout', (req, res) => {

})

module.exports = router;