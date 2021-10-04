const express = require('express');
const categoryServiceRouter = express.Router();

const {
  getCategoryServices,
} = require('../controllers/categoryServiceController');

categoryServiceRouter.route('/getCategoryServices').get(getCategoryServices);

module.exports = categoryServiceRouter;
