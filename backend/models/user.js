const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  readingList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
