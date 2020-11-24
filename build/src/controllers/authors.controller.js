"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorsController = void 0;
const authors_1 = require("./../models/authors");
class AuthorsControllers {
    async index(req, res) {
        try {
            const authors = await authors_1.Authors.findAll({ raw: true });
            res.send(authors);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
    async create(req, res) {
        try {
            const params = req.body;
            const result = await authors_1.Authors.create(params);
            res.json(result);
        }
        catch (error) {
            res.json(error);
        }
    }
    async individual(req, res) {
        try {
            const author = await authors_1.Authors.findByPk(req.params.id, { raw: true });
            res.send(author);
        }
        catch (error) {
            res.send(error);
        }
    }
    async update(req, res) {
        try {
            const author = await authors_1.Authors.update({
                authorname: req.body.authorname
            }, { where: { id: req.params.id }
            });
            const newAuthor = await authors_1.Authors.findByPk(req.params.id, { raw: true });
            res.send(newAuthor);
        }
        catch (error) {
            res.send(error);
        }
    }
    async destroy(req, res) {
        try {
            const result = await authors_1.Authors.destroy({
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
exports.authorsController = new AuthorsControllers();
