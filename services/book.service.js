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
}

module.exports = BooksService;




