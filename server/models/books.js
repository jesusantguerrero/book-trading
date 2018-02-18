const mongoose = require('mongoose');

class Book {
  constructor() {
    this.model = mongoose.model('books', new mongoose.Schema({
      BookId: String,
      title: String,
      owner: String,
      description: String,
      authors: [],
      requests: []
    }))
  }  
}

module.exports = new Book();