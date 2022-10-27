import "reflect-metadata";
import { App } from "./app";
import { config } from "./config";

const appExpress = new App();
appExpress.listen(config.port);
