const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  area: String,
  activity_type: String,
  description: String,
}, {
  versionKey: false
});

const Activity = mongoose.model("activity", activitySchema);
module.exports = Activity;
