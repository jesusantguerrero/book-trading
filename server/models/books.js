const mongoose = require('mongoose');

class Book {
  constructor() {
    this.model = mongoose.model('books', new mongoose.Schema({
      id: String,
      title: String,
      owner: String,
      volumeInfo: Object,
      requests: []
    }))
  }  
}

module.exports = new Book();