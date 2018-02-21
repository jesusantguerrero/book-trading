const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = class encrypter {
  static hash (password) {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        return false
      }
      return hash
    })
  }

  static verify (hash, paraphrase) {
    return bcrypt.compare(paraphrase, hash)
  }
}
