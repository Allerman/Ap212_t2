const mongoose = require('mongoose');

const banheiroSchema = new mongoose.Schema({
    item:{
        type: String,
        require: true,
    },
    check:{
        type: Boolean,
        require: true,
    }
})

module.exports = mongoose.model("Banheiro", banheiroSchema);