const Joi = require('joi');

//멤버 회원 가입
const signup = Joi.object({
  memberName: Joi.string().required(),
  emailAddress: Joi.string().email().required(),
  password: Joi.string().required(), //TODO: length validation
});

const login = Joi.object({
  emailAddress: Joi.string().email().required(),
  password: Joi.string().required()
});

const getMemberInfo = Joi.object({
  memberNo: Joi.number().required()
});

const updateMemberInfo = Joi.object({
  memberNo: Joi.number().required(),
  memberName: Joi.string().optional(),
  mobile: Joi.string().optional(),
  password: Joi.string().optional(),
  newPassword: Joi.string().optional()
}).and('password', 'newPassword');

module.exports = {
  signup,
  login,
  getMemberInfo,
  updateMemberInfo
};
