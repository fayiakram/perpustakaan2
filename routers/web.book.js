const express = require("express");
const BookController = require("../controllers/book.controller");
const book = express.Router();
const bookController = new BookController();
const tblbook = require("../models/books");
kelas.get("/", bookController.index, async (req, res) => {
    try {
        const book = await tblbook.findAll();
        res.status(200).json({
            status: "success",
            data: book
        })
    } catch (error) {

    }
});

module.exports = book;