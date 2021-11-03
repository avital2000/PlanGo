const { signUp, getAll } = require("../controllers/user");

userRouter = (app) => {
  app.get("user/getAll", getAll)
  app.post("/user/signUp", signUp);
};

module.exports = userRouter;
