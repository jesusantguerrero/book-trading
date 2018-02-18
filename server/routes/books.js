const express = require('express');
const router =  express.Router();
const Book = require('./../models/books');

router.get('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

router.patch('/', (req, res) => {

});

router.post('/add/:userId', (req, res) => {
  const book  = JSON.parse(req.body.data);
  book.owner = [req.params.userId];
  Book.model.create(book)
    .then((response) => {
      res.json(response);
    })
});

router.post('/request/:userId', (req, res) => {
 
})

router.post('/accept/:userId/:bookId', (req, res) => {

})

module.exports = router;