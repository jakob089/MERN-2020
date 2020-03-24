const Category = require('../models/Category');

exports.findAll = async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
}