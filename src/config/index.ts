import Joi from "joi";
import dotenv from "dotenv";
dotenv.config();

const schemaDB = Joi.object({
  port: Joi.number().required(),
  prefix: Joi.string().required(),
  db: {
    user: Joi.string().required().allow("").default(""),
    password: Joi.string().required().allow("").default(""),
    host: Joi.string().required(),
    port: Joi.number().required(),
    name: Joi.string().required(),
  },
});

const config = {
  port: 3000,
  prefix: '/api/v1/',
  db: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
  },
};
const { error } = schemaDB.validate(config);

if (error) {
  throw new Error(error.message);
}

export { config };
