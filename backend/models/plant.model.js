const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantSchema = new Schema({

    plantId: {
        type: String,



    },
    commanName: {
        type: String,
    },

    botName: {
        type: String,
    },

    partused: {
        type: String,
    },

    usage: {
        type: String,
    },

    avaiplants: {
        type: String,
    },


}, { timestamps: true });

const Plant = mongoose.model("Plant", plantSchema);
module.exports = Plant;