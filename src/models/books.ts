import { Model, DataTypes, Sequelize} from 'sequelize';
import { database } from "./../database";

export class Books extends Model {

    public id!: number;
    public titulo!: string;
    public autor!: string;
    public genero!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Books.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        titulo: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        autor: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        genero: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        createdAt: {
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
    },
    {
        tableName: "Books",
        sequelize: database
    }
);