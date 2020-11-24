"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsBooks = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("./../database");
const books_1 = require("./../models/books");
const authors_1 = require("./../models/authors");
class AuthorsBooks extends sequelize_1.Model {
}
exports.AuthorsBooks = AuthorsBooks;
AuthorsBooks.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    authorId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: authors_1.Authors,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    bookId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: books_1.Books,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: "Authors",
    sequelize: database_1.database
});
AuthorsBooks.belongsTo(authors_1.Authors);
AuthorsBooks.belongsTo(books_1.Books);
