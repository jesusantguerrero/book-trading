const express = require('express');
const router = express.Router();
const User = require('./../models/user');

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/'
}))

router.post('/register', (req, res) => {
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