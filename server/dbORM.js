import {Sequelize} from "sequelize";
import {config} from "dotenv";
config()

const env = process.env
export const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: env.DB_HOST,
        port: env.DB_PORT
    }
)