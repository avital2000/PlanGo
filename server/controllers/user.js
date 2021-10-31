const User = require('../models/user');

const signUp = async (req, res) => {
  let userData = req.body;
  // let users = await User.find(userData.email);
  // let u = users.filter(x => x.email == userData.email)[0];
  // if (u)
  // res.send({ok:false,message:'exist'});
  res.status(200).json({ ss: false, message: 'exist' });

  // console.log(req.body);
};



module.exports = {
  signUp
};
