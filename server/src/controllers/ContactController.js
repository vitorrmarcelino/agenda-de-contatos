const Contact = require('../models/Contact');
const User = require('../models/User');

exports.create = async (req, res) => {
  const {
    name,
    lastname,
    email,
    number,
  } = req.body;

  const user_id = req.userId;

  const user = await User.findByPk(user_id);

  if (!user) return res.status(400).json({ msg: 'User not found' });

  if (!email && !number) return res.status(400).json({ msg: 'You must provide an email or a number.' });

  let numberExists;
  let emailExists;
  if (number) {
    numberExists = await Contact.findOne({ where: { number, user_id } });
  }
  if (email) {
    emailExists = await Contact.findOne({ where: { email, user_id } });
  }

  if (numberExists) return res.status(400).json({ msg: 'This number has already been registered.' });
  if (emailExists) return res.status(400).json({ msg: 'This email has already been registered.' });

  try {
    const contact = await Contact.create({
      name, lastname, email, number, user_id,
    });

    return res.json(contact);
  } catch (error) {
    return res.status(500).json({ msg: 'Error creating contact.' });
  }
};

exports.show = async (req, res) => {
  const user_id = req.userId;

  try {
    const contacts = await Contact.findAll({ where: { user_id } });

    return res.json(contacts);
  } catch (error) {
    return res.status(500).json({ msg: 'Error finding your contacts.' });
  }
};
