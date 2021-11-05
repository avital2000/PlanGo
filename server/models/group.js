const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: String,
  users: [{ type: mongoose.Types.ObjectId, ref: "user" }],
}, {
  versionKey: false
});

const Group = mongoose.model("group", groupSchema);
module.exports = Group;
// {
//   name:"myFraind",
//   users:[
//     89876434243,
//     54235687865,
//     86764354
//   ]
// }
