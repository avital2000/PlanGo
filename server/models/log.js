const mongoose = require("mongoose");
const Activity_for_log = require("../models/activity_for_log");
const Dates_for_log = require("../models/dates_for_log");

const logSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, ref: "user" },
  name: String,
  //calendar_type: String, //לועזי או עברי (לא רלוונטי)
  start_date: Date,
  end_date: Date,
  date: Date,
  log_type: String, //רגילה או עסקית
 // activities: [Activity_for_log],
  groups: [{ type: mongoose.Types.ObjectId, ref: "group" }],
 // dates:[Dates_for_log]
  
  
  //   area_id: ObjectId,
  //   activity_type_id: ObjectId,
});

const Log = mongoose.model("log", logSchema);
module.exports = Log;
