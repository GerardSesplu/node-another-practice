import { Model, DataTypes, Sequelize} from 'sequelize';
import { database } from "./../database";

export class Authors extends Model {

    public id!: number;
    public authorname!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Authors.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        authorname: {
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
        tableName: "Authors",
        sequelize: database
    }
);