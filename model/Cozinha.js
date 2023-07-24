const mongoose = require('mongoose');

const cozinhaSchema = new mongoose.Schema({
    item:{
        type: String,
        require: true,
    },
    check:{
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Cozinha", cozinhaSchema);