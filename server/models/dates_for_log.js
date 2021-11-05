const mongoose = require("mongoose");

const datesForLogSchema = new mongoose.Schema({
  // log_id = ObjectId,
  date: Date,
  Time: String,
  voting_counter: Number,
  voting_percent: Number,
  hours: [Number]
}, {
  versionKey: false
});

const Dates_for_log = mongoose.model("dates_for_log", datesForLogSchema);
module.exports = Dates_for_log;