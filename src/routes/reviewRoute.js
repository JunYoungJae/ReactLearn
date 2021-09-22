const express = require('express');
const reviewRouter = express.Router();

const {
  registerReview
} = require('../controllers/reviewController');

reviewRouter.route('/registerReview').post(registerReview);

module.exports = reviewRouter;
