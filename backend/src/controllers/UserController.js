const User = require('./../models/User');

exports.findAll = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}