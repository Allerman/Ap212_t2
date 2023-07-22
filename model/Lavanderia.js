const mongoose = require('mongoose');

const lavanderiaSchema = new mongoose.Schema({
    item:{
        type: String,
        require: true,
    },
    check:{
        type: Boolean,
        require: true,
    }
})

module.exports = mongoose.model("Lavanderia", lavanderiaSchema);