const Product = require('../models/Product');

exports.findAll = async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
}