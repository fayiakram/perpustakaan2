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

    async deleteBook(req, res) {
        try {
            const book = await bookService.delete(req.params.id)
            res.status(201).json({
                data: book, message: "Berhasil menghapus buku"
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Gagal menghapus buku." });
        }
    }



}

module.exports = BookController;