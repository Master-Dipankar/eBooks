const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// GET all books
router.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific book
router.get('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new book
router.post('/api/books', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    coverImage: req.body.coverImage,
    rating: req.body.rating,
    genre: req.body.genre
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a book
router.put('/api/books/:id', async (req, res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedBook) return res.status(404).json({message: 'Book not found'})
        res.json(updatedBook)
    } catch(err){
        res.status(400).json({ message: err.message });
    }
});

// DELETE a book
router.delete('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET search for books
router.get('/api/books/search', async (req, res) => {
    const query = req.query.query;
    try {
        const books = await Book.find({ title: { $regex: query, $options: 'i' } });
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;