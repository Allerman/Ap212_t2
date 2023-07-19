require("dotenv").config();
const linkConectDB = process.env.DB_LINK;
const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(
        linkConectDB
    )
}

module.exports = connectToDb;