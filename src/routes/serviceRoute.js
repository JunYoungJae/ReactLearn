const express = require('express');
const serviceRouter = express.Router();

const { addService } = require('../controllers/serviceController');

serviceRouter.route('/addService').post(addService);

module.exports = serviceRouter;
