const BooksService = require("../services/book.service")

const bookService = new BooksService();


class BookController {
    async addBook(req, res) {
        try {
            await bookService.store(req.body);
            res.status(201).json({ message: "Buku berhasil ditambah" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Gagal Menambhakan buku' })

        }
    }

    async getBook(req, res) {
        try {
            const data =
                await bookService.getBook(null);
            res.status(200).json({ message: "Buku diambil", data });
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = BookController;