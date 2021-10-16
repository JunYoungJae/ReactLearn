const express = require('express');
const memberRouter = express.Router();

const {
  getMembers,
  addMember,
  getMember,
} = require('../../controllers/user/memberController');

memberRouter.route('/').get(getMembers);
memberRouter.route('/addmember').post(addMember);
memberRouter.route('/:masterId').get(getMember);

module.exports = memberRouter;
