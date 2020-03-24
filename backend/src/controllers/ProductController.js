const Product = require('../models/Product');

exports.findAll = async (req, res) => {
    console.log('re', res.query);
    
    const products = await Product.findAll();
    res.json(products);
}