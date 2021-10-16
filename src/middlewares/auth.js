const jwt = require('jsonwebtoken');
const errors = require('../errors');
const memberSecret = process.env.JWT_MEMBER_SECRET;
const masterSecret = process.env.JWT_MASTER_SECRET;

const checkMemberAuth = async (req, res, next)=>{
  const authorizationHeader = req.headers.authorization;

  if(!authorizationHeader){
    throw new errors.UnauthorizedError('Authorization header가 전송되지 않았습니다.');
  }

  const [ _, accessToken ] = authorizationHeader.split('Bearer ');
  
  try{
    const { memberNo } = jwt.verify(accessToken, memberSecret);

    req.body.memberNo = memberNo;
  }catch(err){
    console.log(err);
    throw new errors.UnauthorizedError('엑세스 토큰이 올바르지 않습니다.');
  }

  next();
};

const checkMasterAuth = async (req, res ,next)=>{
  const authorizationHeader = req.headers.authorization;

  if(!authorizationHeader){
    throw new errors.UnauthorizedError('Authorization header가 전송되지 않았습니다.');
  }

  const [ _, accessToken ] = authorizationHeader.split('Bearer ');
  
  try{
    const { masterId } = jwt.verify(accessToken, masterSecret);
    req.body.masterId = masterId;
  }catch(err){
    console.log(err);
    throw new errors.UnauthorizedError('엑세스 토큰이 올바르지 않습니다.');
  }
  
  next();
};

module.exports = {
  checkMemberAuth,
  checkMasterAuth
};