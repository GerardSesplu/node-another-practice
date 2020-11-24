"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorBooksController = void 0;
const authors_1 = require("./../models/authors");
class AuthorBooksController {
    async individual(req, res) {
        try {
            const author = await authors_1.Authors.findByPk(req.params.id, { raw: true });
            res.send(author);
        }
        catch (error) {
            res.send(error);
        }
    }
}
exports.authorBooksController = new AuthorBooksController();
