require('dotenv').config()
const express = require('express');
const sequelize = require("./db")
const models = require("./models/models")
const app = express();


const PORT = process.env.PORT || 7000;


const startDB = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
startDB() 