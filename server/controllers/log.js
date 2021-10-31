const Log = require("../models/log");
const mongoose = require("mongoose");


const getAll = async (req, res) => {
    try {
        const logs = await Log.find();
        res.status(200).json(logs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getLogsById = async (req, res) => {
    const { _id } = req.params;
    try {
        const log = await Log.findById(_id);
        res.status(200).json(log);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getLogsByName = async (req, res) => {
    try {
        const log = await Log.find();
        res.status(200).json(log);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const addLog = async (req, res) => {
    let log = req.body;
    let newLog = new Log(log);
    await newLog.save();


};

module.exports = { getAll, getLogsById, getLogsByName, addLog };