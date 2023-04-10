require('dotenv').config()
const express = require('express');
const sequelize = require("./db")
const models = require("./models/models")
const cors = require('cors')
const app = express();
const router = require('./routes/index')
app.use(cors())
app.use(express.json())
app.use('/api', router)
const PORT = process.env.PORT || 7000;

/*app.get('/', (req, res) => {
    res.status(200).json({message: "Working"})
})*/

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