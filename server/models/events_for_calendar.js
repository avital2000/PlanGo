const mongoose = require("mongoose");

const eventsForCalendarSchema = new mongoose.Schema({
  // calendar_id: ObjectId,
  event_type: { type: mongoose.Types.ObjectId, ref: "events_type" },
  date: Date,
  image: String,
  short_description: String,
  long_description: String,
}, {
  versionKey: false
});

const Events_for_calendar = mongoose.model(
  "events_for_calendar",
  eventsForCalendarSchema
);
module.exports = Events_for_calendar;
