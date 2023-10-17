const express = require("express");
const BookController = require("../../controllers/book.controller");
const api = express.Router();
const bookController = new BookController;

api.post('/v1/books/add', bookController.addBook);
api.get('/v1/books', bookController.getBook);

module.exports = api;