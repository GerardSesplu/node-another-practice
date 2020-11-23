"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./../database");
class Users extends sequelize_1.Model {
}
exports.Users = Users;
Users.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    firstname: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    lastname: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true
    },
    createdAt: {
        type: new sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: new sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP')
    },
}, {
    tableName: "Users",
    sequelize: database_1.database
});
