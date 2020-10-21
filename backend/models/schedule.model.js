const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({

    Taskid: { type: String, required: true },
    Name: String,

    Datetimefrom: String,

    Datetimeto: String,
    Empid: String,
    State: String,
}, { timestamps: true });

const Schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = Schedule;