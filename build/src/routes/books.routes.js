"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = require("./../controllers/books.controller");
class BooksRoutes {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/', books_controller_1.booksController.index);
        this.router.post('/', books_controller_1.booksController.create);
        this.router.get('/:id', books_controller_1.booksController.individual);
        this.router.put('/:id', books_controller_1.booksController.update);
        this.router.delete('/:id', books_controller_1.booksController.destroy);
    }
}
const booksRoutes = new BooksRoutes;
exports.default = booksRoutes;
