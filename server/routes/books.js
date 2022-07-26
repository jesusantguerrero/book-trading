const express = require('express');
const axios = require('axios');
const router =  express.Router();
const Book = require('./../models/book');

router.get('/', async (req, res) => {
  try {
    const books = await Book.model.find()
    res.json(books)
  } catch (err) {
    res.sendStatus(404);
    return res.end();
  }
});

router.get('/delete', (req, res) => {
  Book.model.remove()
    .then((deletes) => console.log(deletes))
})

router.delete('/:bookId', (req, res) => {
  Book.model.findAndRemove({ owner: req.body.owner, id: req.params.bookId})
    .then((deletes) => console.log(deletes))
});

router.post('/add/:userId', (req, res) => {
  const { bookId }  = req.body;
  getBook(bookId).then((book) => {
    book.owner = [req.params.userId];
    Book.model.create(book)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => console.log(err))
  }).catch((err) => {
    console.log(err)
  })
});

router.post('/request/:userId', (req, res) => {
 
})

router.post('/accept/:userId/:bookId', (req, res) => {

})

module.exports = router;

async function getBook(bookId) {
  const data  = await axios.default.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
    .then((response) => {
      return response.data;
    }).catch((err) => console.log(err));
  return data;
}