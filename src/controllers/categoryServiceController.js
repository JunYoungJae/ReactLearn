const asyncHandler = require('express-async-handler');

const pg = require('../DB/pg.js');
const mybatisMapper = require('mybatis-mapper');
const path = require('path');
mybatisMapper.createMapper([
  path.resolve(__dirname, '../sql/base/categoryService.xml'),
]);

const format = { language: 'sql', indent: ' ' };
const MAPPER_ID = 'categoryService';
const SQL_ADD_MEMBER = 'getCategoryServices';

// @desc      Get categorySevices
// @route     Get /getCategoryServices
// @access    public
const getCategoryServices = asyncHandler(async (req, res, next) => {
  console.log('call getAll');
  try {
    var query = mybatisMapper.getStatement(
      MAPPER_ID,
      SQL_ADD_MEMBER,
      req,
      format
    );
    var results = await pg.getconnection().query(query);

    console.log('results', results);

    if (String(results['rowCount']) === '0') {
      return res.send({
        MESSAGE_CODE: '02',
        MESSAGE_NAME: 'There is no data. Please check again',
      });
    } else {
      return res.send({
        MESSAGE_CODE: '01',
        MESSAGE_NAME: 'Success',
        rowCount: results['rowCount'],
        list: results['rows'],
      });
    }
  } catch (err) {
    console.log('Fail error while service getCategory');
    console.log('err', err);
    return res.send({
      MESSAGE_CODE: '02',
      MESSAGE_NAME: 'Fail',
      error: err,
    });
  }
});

module.exports = { getCategoryServices };
