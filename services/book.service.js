const { books } = require("../models")

class BooksService {
    constructor() {
        this.bookModel = books;
    }
    async store(paylod) {
        const date = new Date();
        const {
            title,
            author,
            publish_year,
            description,
            genre
        } = paylod
        const data = await this.bookModel.create({
            title,
            author,
            publish_year,
            description,
            genre,
            createdAt: date,
            updatedAt: date,
        });
        return data;
    }
    async getBook(id) {
        let data;
        data = await this.bookModel.findAll();

        return data;
    }

    async delete(id) {
        const deleteBook = this.bookModel.destroy({
            where: {
                id,
            },
        });
        return deleteBook;
    }
    async update(payload) {
        try {
            const {
                id,
                title,
                author,
                publish_year,
                description,
                genre
            } = payload;

            const book = await this.bookModel.findOne({
                where: { id }
            });

            if (!book) {
                throw new Error("Buku tidak ditemukan.");
            }

            await book.update({
                title,
                author,
                publish_year,
                description,
                genre
            });
            return book;
        } catch (error) {
            console.error('Gagal memperbarui Book:', error);
            throw error;
        }
    }
}

module.exports = BooksService;




