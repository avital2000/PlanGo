const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  area: String,
  activity_type: String,
  description: String,
});

const Activity = mongoose.model("activity", activitySchema);
module.exports = Activity;
