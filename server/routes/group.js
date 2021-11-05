const { getAll, getGroupsById, addGroup } = require("../controllers/group");


groupRouter = (app) => {
  app.get("/group/getAll", getAll);
  app.get("/group/getGroupsById/:id", getGroupsById);
  app.post("/group/addGroup", addGroup);
};

module.exports = groupRouter;
