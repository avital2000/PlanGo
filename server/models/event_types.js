const mongoose = require("mongoose");

const eventTypeSchema = new mongoose.Schema({
  name: String,
  color: String,
});

const Event_type = mongoose.model("event_type", eventTypeSchema);
module.exports = Event_type;

