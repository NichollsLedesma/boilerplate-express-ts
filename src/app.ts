import Express, { Application, json, urlencoded } from "express";
import {  container } from "tsyringe";
import { config } from "./config";
import { Database } from "./config/database";
// import { appRoutes } from "./http/routes";
import { AppRoutes } from "./http/routes";

export class App {
  private _app: Application;

  constructor() {
    this._app = Express();
    this._app.use(json());
    this._app.use(urlencoded({ extended: false }));

    // Database
    const db = container.resolve(Database);
    db.connect();

    // Routes
    this._app.use(config.prefix,  container.resolve(AppRoutes).routes);
  }

  public listen(port: number): void {
    this._app.listen(port, () => `Listening on port: ${port}`);
  }
}
