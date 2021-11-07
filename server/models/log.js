const mongoose = require("mongoose");
const Activity_for_log = require("../models/activity_for_log");
const Dates_for_log = require("../models/dates_for_log");

const logSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, ref: "user" },
  name: String,
  start_date: Date,
  end_date: Date,
  date: Date,
  log_type: String, //רגילה או עסקית
  groups: [{ type: mongoose.Types.ObjectId, ref: "group" }],
  //calendar_type: String, //לועזי או עברי (לא רלוונטי)
  // activities: [Activity_for_log],
  // dates:[Dates_for_log]
  //   area_id: ObjectId,
  //   activity_type_id: ObjectId,
}, {
  versionKey: false
});

const Log = mongoose.model("log", logSchema);
module.exports = Log;
