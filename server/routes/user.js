const { signUp } = require("../controllers/user");

userRouter = (app) => {
  app.post("/user/signUp", signUp);
};

module.exports = userRouter;
