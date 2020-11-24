"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("./../controllers/users.controller");
class UsersRoutes {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/', users_controller_1.usersController.index);
        this.router.get('/:id', users_controller_1.usersController.individual);
        this.router.post('/', users_controller_1.usersController.create);
        this.router.put('/:id', users_controller_1.usersController.update);
        this.router.delete('/:id', users_controller_1.usersController.destroy);
    }
}
const userRoutes = new UsersRoutes;
exports.default = userRoutes;
