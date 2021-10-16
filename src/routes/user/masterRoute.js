const express = require('express');
const masterRouter = express.Router();

const {
  getMasters,
  getMaster,
} = require('../../controllers/user/masterController');

masterRouter.route('/').get(getMasters);
masterRouter.route('/:masterNo').get(getMaster);
//masterRouter.route('/addmaster').post(addMaster);

module.exports = masterRouter;
