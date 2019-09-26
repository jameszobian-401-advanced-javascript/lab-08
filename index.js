'use strict';

require('dotenv').config();
const mongoose = require('mongoose');


//adding modules
const categories = require('./models/categories.js');
const catSch = require('./models/categories-schema.js');
const products = require('./models/products.js');
const proSch = require('./models/products-schema.js');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

require('./src/app.js').start(process.env.PORT);
