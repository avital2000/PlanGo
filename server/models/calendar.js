const mongoose = require("mongoose");
const Events_for_calendar = require("../models/events_for_calendar");

const calendarSchema = new mongoose.Schema({
  name: String,
  manager_user_id: { type: mongoose.Types.ObjectId, ref: 'user' },
  group_id: {type:mongoose.Types.ObjectId, ref:'user'},
  // events: [Events_for_calendar],
}, {
  versionKey: false
});

const Calendar = mongoose.model("calendar", calendarSchema);
module.exports = Calendar;
