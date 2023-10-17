const express = require("express");
const BookController = require("../../controllers/book.controller");
const api = express.Router();
const bookController = new BookController;

api.post('/v1/books', bookController.addBook);
api.get('/v1/books', bookController.getBook);
api.delete('/v1/books/:id', bookController.deleteBook);
api.put('/v1/books/:id', bookController.editBook);

module.exports = api;