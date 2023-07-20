const mongoose = require('mongoose');

const quartoSchema = new mongoose.Schema({
    item:{
        type: String,
        require: true,
    },
    check:{
        type: Boolean,
        require: true,
    }
})

module.exports = mongoose.model("Quarto", quartoSchema);