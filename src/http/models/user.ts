import { DataTypes, Model } from "sequelize";
import { container } from "tsyringe";
import { Database } from "../../config/database";

const sequelize = container.resolve(Database);

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize.connection, 
    modelName: "users", 
  }
);
