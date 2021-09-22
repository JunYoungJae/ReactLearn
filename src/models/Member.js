const Moment = require('moment');

const pg = require('../DB/pg.js');
const mybatisMapper = require('mybatis-mapper');
const path = require('path');
mybatisMapper.createMapper([path.resolve(__dirname, '../sql/memberInfo.xml')]);

const format = {language: 'sql', indent: ' '};
const MAPPER_ID = "memberInfo";
const SQL_ADD_MEMBER = "addMember";

function Member(memberNo, memberName, gender, emailAddress, status, mobile, password, address, lat, lng, token, regitster_id) {
    this.memberNo = memberNo,
    this.memberName = memberName,
    this.gender = gender,
    this.emailAddress = emailAddress,
    this.status = status,
    this.mobile = mobile,
    this.password = password,
    this.address = address,
    this.token = token,
    this.lat = lat,
    this.lng = lng,
    this.regitster_id = regitster_id
}

Member.prototype.setMemberNo = (value) => {
    this.memberNo = value;
}

Member.prototype.getMemberNo = () => {
    return this.memberNo;
}

Member.prototype.getMemberName = () => {
    return this.memberName;
}

Member.prototype.getGender = () => {
    return this.gender;
}

Member.prototype.getEmailAddress = () => {
    return this.emailAddress;
}

Member.prototype.getStatus = () => {
    return this.status;
}

Member.prototype.getMobile = () => {
    return this.mobile;
}

Member.prototype.getPassword = () => {
    return this.password;
}

Member.prototype.getAddress = () => {
    return this.address;
}

Member.prototype.getToken = () => {
    return this.token;
}

Member.prototype.getLat = () => {
    return this.lat;
}

Member.prototype.getLng = () => {
    return this.lng;
}

Member.prototype.getRegitster_id = () => {
    return this.regitster_id;
}

Member.prototype.insertMember = async (req, res) => {    
    try {         
       var _no = '0000000000'; 

       var memberNo = await pg.getconnection().query("select nextval('sq_member_no')");
       memberNo = String(memberNo['rows'][0]['nextval']);
       memberNo =  String(_no + memberNo.toString()).substr( String(_no + memberNo.toString()).length-10, 10)
       req['memberNo'] = memberNo;

        var query = mybatisMapper.getStatement(MAPPER_ID, SQL_ADD_MEMBER, req, format); 
      
        var results = await pg.getconnection().query(query);
        //item = results['rows'];
      
        console.log('results', results);
        return res = results;
    } catch (err) {
        console.log('err', err);
        return res = err;
    } 
}

module.exports = Member;

