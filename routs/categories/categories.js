'use strict'

const express = require('express');
const Categories = require('../../models/categories.js');
const categories = new Categories();

const router = express.Router();

router.get('./routs/categories/:id', getCategories);
router.post('./routs/categories/:id', postCategories);
router.put('./routs/categories/:id', putCategories);
router.delete('./routs/categories/:id', deleteCategories);

module.exports = Categories;