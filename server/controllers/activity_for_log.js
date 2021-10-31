const Activity = require("../models/activity");
const Log = require("../models/log");
const mongoose = require("mongoose");

const temp = async (req, res) => {
  return res.send('this is activity for log');
};

const getAll = async (req, res) => {
  try {
    const activitiesForLog = await Activity.find();
    res.status(200).json(activitiesForLog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  const { _id } = req.params;
  try {
    const log = await Activity.findById(_id);
    res.status(200).json(log);
  } catch (error) {
    res.status(404).json({message:error.message});
  }
  // if (!mongoose.Types.ObjectId.isValid(id))
  //   return res.status(404).send("invalid id");
  // let activityForLog = await Activity.findById(_id);
  // if (!activityForLog) return res.status(404).send("no activity with this id");
  // return res.send(activity);
};

const addActivityForLog = async(req, res) => {
  // let activityForLog = req.body;
  // let newActivityForLog = new Activity(activityForLog);
  // let activity = await Activity.findById(activityForLog.activity_id);
  // let log = await Log.findById(activitiesForLog.log_id);

  const {}=req.body;
  const newLog

};
