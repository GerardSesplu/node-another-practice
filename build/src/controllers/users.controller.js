"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const users_1 = require("./../models/users");
class UsersControllers {
    async index(req, res) {
        try {
            const users = await users_1.Users.findAll({ raw: true });
            res.send(users);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
    async individual(req, res) {
        try {
            const user = await users_1.Users.findByPk(req.params.id, { raw: true });
            res.send(user);
        }
        catch (error) {
            res.send(error);
        }
    }
    async create(req, res) {
        try {
            const params = req.body;
            const result = await users_1.Users.create(params);
            res.json(result);
        }
        catch (error) {
            res.json(error);
        }
    }
    async update(req, res) {
        try {
            const user = await users_1.Users.update({
                name: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email
            }, { where: { id: req.params.id }
            });
            res.json(user);
        }
        catch (error) {
            res.send(error);
        }
    }
    async destroy(req, res) {
        try {
            const result = await users_1.Users.destroy({
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
exports.usersController = new UsersControllers();
