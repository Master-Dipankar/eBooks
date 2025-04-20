const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  coverImage: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  genre: {
    type: [String],
    default: []
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;