const pg = require('../DB/pg.js');
const mybatisMapper = require('mybatis-mapper');
const path = require('path');
mybatisMapper.createMapper([
  path.resolve(__dirname, '../sql/user/masterInfo.xml'),
]);

const format = { language: 'sql', indent: ' ' };
const MAPPER_ID = 'masterInfo';
const SQL_ADD_MEMBER = 'addMaster';

function Master() {}

Master.prototype.insertMaster = async (req, res) => {
  try {
    var _no = '0000000000';

    var masterNo = await pg
      .getconnection()
      // eslint-disable-next-line quotes
      .query("select nextval('sq_master_no')");
    masterNo = String(masterNo['rows'][0]['nextval']);
    masterNo = String(_no + masterNo.toString()).substr(
      String(_no + masterNo.toString()).length - 10,
      10
    );
    req['masterNo'] = masterNo;

    var query = mybatisMapper.getStatement(
      MAPPER_ID,
      SQL_ADD_MEMBER,
      req,
      format
    );

    var results = await pg.getconnection().query(query);
    //item = results['rows'];

    console.log('results', results);
    return (res = results);
  } catch (err) {
    console.log('err', err);
    return (res = err);
  }
};

module.exports = Master;
