const Calendar = require("../models/calendar");
const mongoose = require("mongoose");


const getAll = async (req, res) => {
    try {
        const calendars = await Calendar.find();
        res.status(200).json(calendars);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getCalendarsById = async (req, res) => {
    const { _id } = req.params;
    try {
        const calendar = await Calendar.findById(_id);
        res.status(200).json(log);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const addCalendar = async (req, res) => {
    let calendar = req.body;
    let newCalendar = new Calendar(calendar);
    await newCalendar.save();


};

module.exports = { getAll };