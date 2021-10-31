const mongoose = require("mongoose");

const datesForLogSchema = new mongoose.Schema({
  // log_id = ObjectId,
  date: Date,
  Time:String,
  voting_counter: Number,
  hours:[Number]
});

const Dates_for_log = mongoose.model("dates_for_log", datesForLogSchema);
module.exports = Dates_for_log;