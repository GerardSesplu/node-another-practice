import { Model, DataTypes, Sequelize} from 'sequelize';
import { database } from "./../database";

export class Users extends Model {

    public id!: number;
    public firstname!: string;
    public lastname!: string;
    public email!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: new DataTypes.STRING(128),
            allowNull: false,
        },
        lastname: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        email: {
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
        tableName: "Users",
        sequelize: database
    }
);