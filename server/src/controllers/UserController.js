const validator = require('validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User Register
exports.create = async (req, res) => {
  const {
    name,
    email,
    password,
    confirmpassword,
  } = req.body;

  if (!name || !email || !password || !confirmpassword) {
    return res.status(400).json({ msg: 'Complete all the fields!' });
  }

  const isEmail = validator.isEmail(email);
  if (!isEmail) return res.status(400).json({ msg: 'Enter a valid email address!' });

  const emailExists = await User.findOne({ where: { email } });
  if (emailExists) return res.status(400).json({ msg: 'E-mail has already been used!' });

  if (password.length < 4 || password.length > 20) {
    return res.status(400).json({ msg: 'password must be between 4 and 20 characters!' });
  }

  if (password !== confirmpassword) return res.status(400).json({ msg: 'Your passwords does not match!' });

  const passwordHash = await bcryptjs.hash(password, 8);

  try {
    const newUser = await User.create({
      name,
      email,
      password: passwordHash,
    });

    return res.json(newUser);
  } catch (error) {
    return res.status(500).json({ msg: 'Error creating a new user!' });
  }
};

// User Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ msg: 'Complete all the fields!' });

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(404).json({ msg: 'User not found!' });

  const passwordIsValid = await bcryptjs.compare(password, user.password);

  if (!passwordIsValid) return res.status(422).json({ msg: 'Incorrect password!' });

  try {
    const secret = process.env.TOKEN_SECRET;
    const expiration = Number(process.env.TOKEN_EXPIRATION);
    const { id } = user;
    const token = jwt.sign({ id, email }, secret, {
      expiresIn: expiration,
    });

    return res.json({ token, user });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal server error!' });
  }
};

exports.update = async (req, res) => {
  const user = await User.findByPk(req.userId);
  const {
    name, email, password, confirmpassword,
  } = req.body;

  if (!user) return res.status(404).json({ msg: 'User not found.' });

  if (email) {
    const isEmail = validator.isEmail(email);
    if (!isEmail) return res.status(400).json({ msg: 'Enter a valid email address!' });

    const emailExists = await User.findOne({ where: { email } });
    if (emailExists) return res.status(400).json({ msg: 'E-mail has already been used!' });
  }

  if (password) {
    if (password.length < 4 || password.length > 20) {
      return res.status(400).json({ msg: 'As senhas devem ter entre 4 e 20 caracteres!' });
    }

    if (password !== confirmpassword) return res.status(400).json({ msg: 'As senhas estão diferentes!' });

    const passwordHash = await bcryptjs.hash(password, 8);
    req.body.password = passwordHash;
  }

  try {
    const updateFields = {};

    if (name) updateFields.name = name;
    if (email) updateFields.email = email;
    if (password) updateFields.password = req.body.password;
    const updatedUser = await user.update(updateFields);

    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ msg: 'Error updating user.' });
  }
};

exports.delete = async (req, res) => {
  const user = await User.findByPk(req.userId);

  if (!user) return res.status(404).json({ msg: 'User not found.' });

  const { password } = req.body;

  const passwordIsValid = await bcryptjs.compare(password, user.password);

  if (!passwordIsValid) return res.status(422).json({ msg: 'Incorrect password!' });

  try {
    const deletedUser = await user.destroy();
    return res.json(deletedUser);
  } catch (error) {
    return res.status(500).json({ msg: 'Internal server error!' });
  }
};
