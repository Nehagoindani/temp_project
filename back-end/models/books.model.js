const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  Bookname: { type: String, required: true },
  Author_Name: { type: String, required: true },
  bookImage: { type: String, required: true },
  
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;