"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksController = void 0;
const books_1 = require("./../models/books");
class BooksControllers {
    async index(req, res) {
        try {
            const books = await books_1.Books.findAll({ raw: true });
            res.send(books);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
    async create(req, res) {
        try {
            const params = req.body;
            const result = await books_1.Books.create(params);
            res.json(result);
        }
        catch (error) {
            res.json(error);
        }
    }
    async individual(req, res) {
        try {
            const book = await books_1.Books.findByPk(req.params.id, { raw: true });
            res.send(book);
        }
        catch (error) {
            res.send(error);
        }
    }
    async update(req, res) {
        try {
            const book = await books_1.Books.update({
                titulo: req.body.titulo,
                autor: req.body.autor,
                genero: req.body.genero
            }, { where: { id: req.params.id }
            });
            res.json(book);
        }
        catch (error) {
            res.send(error);
        }
    }
    async destroy(req, res) {
        try {
            const result = await books_1.Books.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.send(result);
        }
        catch (error) {
            res.json(error);
        }
    }
}
exports.booksController = new BooksControllers();
