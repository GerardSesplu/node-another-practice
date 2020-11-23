"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const users_1 = require("./../models/users");
class UsersControllers {
    index(req, res) {
        res.send('hola mundo');
    }
    async create(req, res) {
        const params = req.body;
        const result = await users_1.Users.create(params);
        res.send(result);
    }
    async delete(req, res) {
        const result = await users_1.Users.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send(result);
    }
    async update(req, res) {
        const result = await users_1.Users.update({
            name: req.body.firstname,
            lastname: req.body.lastname,
        }, { where: { id: req.params.id }
        });
    }
}
exports.usersController = new UsersControllers();
