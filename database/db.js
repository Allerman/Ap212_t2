require("dotenv").config();
const linkConectDB = process.env.DB_LINK;

const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(
        linkConectDB,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(()=> console.log("MongoDB conectado, baby!")).catch((err)=> console.log(err));
}

module.exports = connectToDb;