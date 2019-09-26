'use strict'

const express = require('express');
const Products = require('../../models/products.js');
const products = new Products();

const router = express.Router();

router.get('./routs/products/:id', getProducts);
router.post('./routs/products/:id', postProducts);
router.put('./routs/products/:id', putProducts);
router.delete('./routs/products/:id', deleteProducts);

module.exports = router;