const Group = require("../models/group");
const mongoose = require("mongoose");


const getAll = async (req, res) => {
    try {
        const groups = await Group.find();
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getGroupsById = async (req, res) => {
    const { _id } = req.params;
    try {
        const group = await Group.findById(_id);
        res.status(200).json(log);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const addGroup = async (req, res) => {
    let group = req.body;
    let newGroup = new Group(group);
    await newGroup.save();


};

module.exports = { getAll, getGroupsById, addGroup };