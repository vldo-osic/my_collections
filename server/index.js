import express from "express";
import chalk from "chalk";
import {sequelize} from "./dbORM.js";
import {config} from "dotenv";
config()

const app = express()
const PORT = process.env.PORT || 5000
const errMessage = (message) => { console.log((chalk.bgRed(message))) }
const successMessage = (message) => { console.log(chalk.bgGreen(message)) }

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => successMessage(`Сервер работает на порте ${PORT}`))
    } catch (error) {
        errMessage(error)
    }
}

start()

app.get('/', (req, res) => res.send('Hello World!'))
