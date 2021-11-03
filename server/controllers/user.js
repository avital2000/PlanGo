const User = require('../models/user');

const signUp = async (req, res) => {
  let userData = req.body;
  let u = await User.find({ email: userData.email });
  if (u.length > 0)
    res.status(200).json({ ss: false, message: 'exist' });
  else
  {
    res.status(200).json({ ok: true, message: 'added' })
    let newUser = new User(userData);
    await newUser.save();
    console.log(newUser);
  }
};


const getAll = async (req, res) => {
  try {
    console.log('getAll in controller');
      const users = await User.find();
      res.status(200).json(users);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
};



module.exports = {
  signUp, getAll
};
