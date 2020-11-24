"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authors = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./../database");
class Authors extends sequelize_1.Model {
}
exports.Authors = Authors;
Authors.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    authorname: {
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
    tableName: "Authors",
    sequelize: database_1.database
});
