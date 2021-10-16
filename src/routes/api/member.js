const router = require('express').Router();
const { validate, memberValidator } = require('../../validator');
const memberService = require('../../service/member');
const { checkMemberAuth } = require('../../middlewares/auth');

//멤버 회원가입
router.post('/', async (req, res) => {

  const signupData = validate(req.body, memberValidator.signup);
  const member = await memberService.createMember(signupData);

  res.status(201);
  res.send(member);
});

//로그인
router.post('/login', async (req, res)=>{

  const loginData = validate(req.body, memberValidator.login);
  const auth = await memberService.login(loginData);
  
  res.status(201);
  res.send(auth);
});

//멤버 정보 조회
router.get('/', checkMemberAuth, async (req, res) => {

  const { memberNo } = validate(req.body, memberValidator.getMemberInfo);
  const member = await memberService.findOneMember(memberNo);

  res.status(200);
  res.json(member);
});

router.patch('/', checkMemberAuth, async (req, res)=>{
  const updateMemberData = validate(req.body, memberValidator.updateMemberInfo);

  const memberInfo = await memberService.updateMember(updateMemberData);

  res.status(200);
  res.send(memberInfo);
});



module.exports = router;
