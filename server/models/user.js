const mongoose = require('mongoose');
const encrypter = require('./../utils/encrypter');

class User {
  constructor() {
    this.model = mongoose.model('users', new mongoose.Schema({
      email: String,
      password: String,
      fullname: String,
      city: String,
      state: String
    }))
  }  

  register(newUser) {
    return this.model.findOne({ email: newUser.email })
      .then((found) => {
        if (!found) {
          return this.createUser(newUser);
        } else {
          return false;
        }
      });
  }

  createUser(newUser) {
    return this.model.create({
      email: newUser.email,
      password: encrypter.hash(newUser.password),
      fullname: newUser.fullname,
      city: newUser.city,
      state: newUser.state
    })
  }

  verifyPassword(hash, password) {
    return encrypter.verify(hash, password);
  }
}

module.exports = new User();