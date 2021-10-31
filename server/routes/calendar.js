const { getAll } = require("../controllers/calendar");


calendarRouter = (app) => {
  app.get("/calendar/getAll", getAll);
};

module.exports = calendarRouter;
