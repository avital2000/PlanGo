const mongoose = require("mongoose");

const congratulationsSchema = new mongoose.Schema({
  name: String,
  description: String,
  event_for_calendar_id: {
    type: mongoose.Types.ObjectId,
    ref: "events_for_calendar",
  },
  sender_user_id: { type: mongoose.Types.ObjectId, ref: "user" },
  receiver_user_id: { type: mongoose.Types.ObjectId, ref: "user" },
  permission: Boolean,
});

const Congratulations = mongoose.model(
  "congratulations",
  congratulationsSchema
);
module.exports = Congratulations;
