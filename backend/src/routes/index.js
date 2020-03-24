const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const ProductController = require('../controllers/ProductController');
const CategoryController = require('../controllers/CategoryController');

// Router: Users 
router.get('/user', UserController.findAll);

// Router: Products 
router.get('/product', ProductController.findAll);

// Router: Categories 
router.get('/category', CategoryController.findAll);

module.exports = router;