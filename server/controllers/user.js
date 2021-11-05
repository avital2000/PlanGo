const User = require('../models/user');

const signUp = async (req, res) => {
  let userData = req.body;
  let u = await User.find({ email: userData.email });
  if (u.length > 0)
    res.status(200).json({ ok: false, message: 'exist' });
  else {
    let newUser = new User(userData);
    await newUser.save();
    console.log(newUser);
    res.status(200).json({ ok: true, message: 'added', user: newUser })
  }
};

const signIn = async (req, res) => {
  let userData = req.body;
  let u = await User.find({ email: userData.email, password: userData.password });
  console.log(u.email);
  if (u.length === 1)
    res.status(200).json({ ok: true, message: 'added', user: u });
  else {
    res.status(200).json({ ok: false, message: 'not exists' })
  }
};


const getAll = async (req, res) => {
  console.log('user get all');
  try {
    console.log('getAll in controller');
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



module.exports = {
  signUp, signIn, getAll
};
