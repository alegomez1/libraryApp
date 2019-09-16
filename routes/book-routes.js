const express = require('express');
const router  = express.Router();

const Book = require('../models/Book')

router.get('/books', (req, res, next)=>{

  Book.find()
  .then((allTheBooks)=>{

    res.render('book-views/books-list', {books: allTheBooks})

  })
  .catch((err)=>{
    next(err)
  })







})


router.get('/books/:theid', (req, res, next)=>{


let id = req.params.theid

Book.findById(id)
.then((bookObject)=>{

  res.render('book-views/details', {theBook: bookObject})
})
.catch((err)=>{
  next(err)
})




})







module.exports = router;
