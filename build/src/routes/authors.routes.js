"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authors_controller_1 = require("./../controllers/authors.controller");
const authorBooks_controller_1 = require("../controllers/authorBooks.controller");
class AuthorsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/', authors_controller_1.authorsController.index);
        this.router.get('/:id', authors_controller_1.authorsController.individual);
        this.router.post('/', authors_controller_1.authorsController.create);
        this.router.put('/:id', authors_controller_1.authorsController.update);
        this.router.delete('/:id', authors_controller_1.authorsController.destroy);
        this.router.get('/:id/books', authorBooks_controller_1.authorBooksController.individual);
    }
}
const authorsRoutes = new AuthorsRoutes;
exports.default = authorsRoutes;
