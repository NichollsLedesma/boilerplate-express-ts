import { Sequelize } from "sequelize";
import { singleton } from "tsyringe";
import { config } from "./index";

@singleton()
export class Database {
  private _connection: any;

  constructor() {
    const { db } = config;
    const credentialString =
      db.password && db.user ? `${db.user}:${db.password}@` : "";
    this._connection = new Sequelize(
      `postgres://${credentialString}${db.host}:${db.port}/${db.name}`
    );
   
  }

  public get connection(): Sequelize {
    return this._connection;
  }

  public async connect(): Promise<void> {
    try {
      await this._connection.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

export const connectDB = async () => {};
