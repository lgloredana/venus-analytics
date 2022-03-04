import User from '../models/User';

// Register User Controller
exports.registerUser = async (req, res) => {
  const { name, email, userId } = req.body;

  try {
    let user = await User.findOne({ email });

    // Match express-validator errors for consistency purposes
    if (user) {
      res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    user = new User({ name, email, userId });
    await user.save();

    res.send({ status: 201, data: { user } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.fetchUsers = async (req, res) => {
  try {
    let users = await User.find({});

    res.send({ status: 200, data: { users } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
