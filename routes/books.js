const express = require('express');
const Router = express.Router();
const booksController = require('../controllers/books');

Router.get('/:bookId', booksController.getBookById);
Router.post('/', booksController.createBook);
Router.delete('/:bookId', booksController.deleteBookById);
Router.put('/:bookId', booksController.updateBook);

module.exports = Router;