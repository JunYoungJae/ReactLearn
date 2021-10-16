const asyncHandler = require('express-async-handler');
const { address } = require('faker');
const Member = require('../../models/Member');
const memberRouter = require('../../routes/user/memberRoute');

// @desc      Get  Members
// @route     Get /
// @access    Public
const getMembers = asyncHandler(async (req, res, next) => {
  const members = new mem();

  members.setMBR_NO('0000001');
  return res.json({ members });
});

// @desc      Get a Member
// @route     Get /:memberId
// @access    Private
const getMember = asyncHandler(async (req, res, next) => {
  const member = '';

  return res.send({ member });
});

// @desc      Get a Member
// @route     Get /:memberId
// @access    Private
const addMember = asyncHandler(async (req, res, next) => {
  console.log('call addMember');
  try {
    var memberNo = '0000000003';
    var memberName = String(req.body.memberName);
    var gender = String(req.body.gender);
    var emailAddress = String(req.body.emailAddress);
    var status = '01';
    var mobile = String(req.body.mobile);
    var password = String(req.body.password);
    var address = String(req.body.address);
    var lat = String(req.body.lat);
    var lng = String(req.body.lng);
    var register_id = String(req.body.register_id);

    var item = new Member(
      memberNo,
      memberName,
      gender,
      emailAddress,
      status,
      mobile,
      password,
      address,
      address,
      lat,
      lng,
      register_id
    );

    console.log('item', item);

    var result = await item.insertMember(item);
    console.log('item', result);
    if (result['severity'] === 'ERROR') {
      return res.send({
        MESSAGE_CODE: '02',
        MESSAGE_NAME: 'Fail',
        result,
      });
    } else {
      return res.send({
        MESSAGE_CODE: '01',
        MESSAGE_NAME: 'Success',
        result,
      });
    }
  } catch (err) {
    return res.send({
      MESSAGE_CODE: '02',
      MESSAGE_NAME: 'Fail',
      err,
    });
  }
});

module.exports = { getMembers, getMember, addMember };
