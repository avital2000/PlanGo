const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

  mongoose.connect("mongodb://localhost:27017/meeting_DB", {useNewUrlParser: true, useUnifiedTopology:true})
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cors());

require('./routes/user')(app);
require('./routes/log')(app);
require('./routes/group')(app);
require('./routes/calendar')(app);

app.use(morgan("dev"));

app.listen("3001", () => {
  console.log("listening on port " + 3001);
});

app.get('/', function (req, res) {
  res.send("get work")
})