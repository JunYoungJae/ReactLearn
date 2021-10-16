const express = require('express');
const quotRouter = express.Router();

const {
  addQuotStep,
  addQuotStepQuestion,
  getQuotQuestions,
} = require('../controllers/quotController');

quotRouter.route('/addQuotStep').post(addQuotStep);
quotRouter.route('/addQuotStepQuestion').post(addQuotStepQuestion);
quotRouter.route('/getQuotQuestions').get(getQuotQuestions);

(module.exports = quotRouter), getQuotQuestions;
