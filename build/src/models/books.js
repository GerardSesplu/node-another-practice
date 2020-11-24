"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./../database");
class Books extends sequelize_1.Model {
}
exports.Books = Books;
Books.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    autor: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    genero: {
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
    tableName: "Books",
    sequelize: database_1.database
});
