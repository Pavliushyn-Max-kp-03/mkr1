require('dotenv').config()
const express = require('express');

const app = express();
const PORT = process.env.PORT || 7000;


const startDB = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
startDB()