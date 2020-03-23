const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const ProductController = require('../controllers/ProductController');

// Router: Users 
router.get('/user', UserController.findAll);

// Router: Products 
router.get('/product', ProductController.findAll);

module.exports = router;