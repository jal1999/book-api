const Book = require('../models/book');

exports.createBook = async (req, res, next) => {
    const author = req.body.author;
    const title = req.body.title;
    try {
        const newBook = await Book.create({
            author: author, title: title
        });
        res
            .status(201)
            .json({
                message: 'Book created successfully',
                book: newBook
            });
    } catch (e) {
        console.log(e);
    }
};

exports.getBookById = async (req, res, next) => {
    const id = req.params.bookId;
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            res.status(404).json({
                message: 'Book not found'
            });
        } else {
            res
                .status(200)
                .json({
                    message: 'Book retrieved successfully',
                    book: book
                });
        }
    } catch (e) {
        console.log(e);
    }
};

exports.updateBook = async (req, res, next) => {
    const id = req.params.bookId;
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            res
                .status(404)
                .json({
                    message: 'Book not found'
                })
        } else {
            book.title = req.body.title;
            book.author = req.body.author;
            await book.save();
            res
                .status(200)
                .json({
                    message: 'Book updated successfully',
                    book: book
                });
        }
    } catch (e) {
        console.log(e);
    }
};

exports.deleteBookById = async (req, res, next) => {
    const id = req.params.bookId;
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            res
                .status(404)
                .json({
                    message: 'Book not found'
                });
        } else {
            const result = await book.destroy();
            res
                .status(204)
                .json({
                    message: 'Book deleted successfully'
                });
        }
    } catch (e) {
        console.log(e);
    }
};