import { Model, DataTypes, Sequelize} from 'sequelize';
import { database } from "./../database";
import { Books } from './../models/books';
import { Authors } from './../models/authors';

export class AuthorsBooks extends Model {

    public id!: number;
    public authorId!: number;
    public bookId!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

AuthorsBooks.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          authorId: {
            type: DataTypes.INTEGER,
            references: {
              model: Authors,
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          },
          bookId: {
            type: DataTypes.INTEGER,
            references: {
              model: Books,
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          }
    },
    {
        tableName: "author-books",
        sequelize: database
    }
);

AuthorsBooks.belongsTo(Authors);
AuthorsBooks.belongsTo(Books);
