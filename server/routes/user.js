const { signUp, signIn, getAll } = require("../controllers/user");

userRouter = (app) => {
  app.get("/user/getAll", getAll)
  app.post("/user/signUp", signUp);
  app.post("/user/signIn", signIn);
};

module.exports = userRouter;
