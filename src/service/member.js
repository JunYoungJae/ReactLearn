const models = require('../models/sequelize-models');
const errors = require('../errors');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const memberSecret = process.env.JWT_MEMBER_SECRET;

const createMember = async (signupData) => {
  const { emailAddress, memberName, password } = signupData;

  const [member, created] = await models.Member.findOrCreate({
    where: {
      emailAddress
    },
    attributes: [ 
      'memberNo',
      'memberName',
      'emailAddress'
    ],
    defaults: signupData
  });

  if(!created){
    throw new errors.BadRequestError('이미 존재하는 사용자 이메일입니다.');
  }
  
  return member.dataValues;
};

const login = async (loginData)=>{
  const { emailAddress, password } = loginData;

  const member = await models.Member.findOne({
    where:{
      emailAddress
    }
  });

  if(!member){
    throw new errors.BadRequestError('사용자가 존재하지 않습니다.');
  }

  const isEqualPassword = member.isEqualPassword(password);
  if(!isEqualPassword){
    throw new errors.BadRequestError('비밀번호가 일치하지 않습니다.');
  }

  const payload = { 
    memberNo: member.memberNo,
    exp: moment().add(2, 'hours').unix()
  };

  const authData = {
    accessToken: jwt.sign(payload, memberSecret)
  };
  
  return authData;
};

const findOneMember = async (memberNo) => {
  const member = await models.Member.findByPk(memberNo, {
    attributes: ['memberNo', 'memberName', 'emailAddress']
  });
  if(!member){
    throw new errors.NotFoundError('사용자가 존재하지 않습니다.');
  }

  return member;
};

const findAllMembers = async () => {
  const members = await models.Member.findAll();

  return members;
};

const updateMember = async (updateMemberData) => {
  const { memberNo, memberName, mobile, password, newPassword } = updateMemberData;

  const member = await models.Member.findByPk(memberNo);

  if(!member){
    throw new errors.NotFoundError('사용자가 존재하지 않습니다.');
  }

  if (password) {
    console.log('###updateMember password');
    console.log(member);
    const isEqual = member.isEqualPassword(password);

    if (!isEqual) {
      throw new errors.BadRequestError('비밀번호가 일치하지 않습니다');
    }

    updateMemberData.password = newPassword;
    delete updateMemberData.newPassword;
  }
  
  await member.update(updateMemberData);
  await member.reload();

  const memberResponse = {
    memberNo: member.memberNo,
    memberName: member.memberName,
    emailAddress: member.emailAddress
  };

  return memberResponse;
};

module.exports = {
  createMember,
  findAllMembers,
  findOneMember,
  updateMember,
  login
};
