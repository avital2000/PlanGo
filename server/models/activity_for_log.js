const mongoose = require("mongoose");

const activityForLogSchema = new mongoose.Schema({
  //log_id = ObjectId,
  activity_id: { type: mongoose.Types.ObjectId, ref: "activity" },
  voting_counter: Number,
});

const Activity_for_log = mongoose.model(
  "activity_for_log",
  activityForLogSchema
);
module.exports = Activity_for_log;
