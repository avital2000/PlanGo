const { getAll, getLogsById, getLogsByName, addLog } = require("../controllers/log");


logRouter = (app) => {
  app.get("/log/getAll", getAll);
  app.get("/log/getLogsById/:id", getLogsById);
  // app.get("log/getLogsByName/:name", getLogsByName);
  app.post("/log/addLog", addLog);
};

module.exports = logRouter;
