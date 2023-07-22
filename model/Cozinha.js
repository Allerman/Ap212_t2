const mongoose = require('mongoose');

const cozinhaSchema = new mongoose.Schema({
    item:{
        type: String,
        require: true,
    },
    check:{
        type: Boolean,
        require: true,
    }
})

module.exports = mongoose.model("Cozinha", cozinhaSchema);