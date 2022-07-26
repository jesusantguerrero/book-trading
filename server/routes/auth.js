const express = require('express');
const user = require('../models/user');
const router = express.Router();
const passport = require('./../utils/passport');
const JWT = require('jsonwebtoken')

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/'
}))

router.post('/register', async (req, res) => {
  const { email, password, fullname } = req.body
  try {
    const payload = {
      email,
      fullname,
      password
    }
    const newUser = await user.register(payload)
    if (newUser) {
        const token = JWT.sign({ email: newUser.email, user_id: newUser._id},  process.env.TOKEN_KEY, { expiresIn: '24h' }); // Token is created
        newUser.token = token
        return res.status(201).json({
          user: newUser,
          token
        });
    } else {
      return sendAuthError(res)
    }
  } catch (err) {
    return sendAuthError(res)
  }

})

function sendAuthError(res) {
  return res.status(400).json({
    error: {
      code: `USR_10`,
      message: `Error occurred`,  // eslint-disable-line
      field: `register`,
      status: 400,
    },
  });
}

router.get('/logout', (req, res) => {

})

module.exports = router;