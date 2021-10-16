const asyncHandler = require('express-async-handler');
const { getTodayYYMMDD } = require('../utils/date');
const { getSequenceNumber } = require('../utils/common');

const pg = require('../DB/pg.js');
const mybatisMapper = require('mybatis-mapper');
const path = require('path');
mybatisMapper.createMapper([path.resolve(__dirname, '../sql/service.xml')]);

const format = { language: 'sql', indent: ' ' };

// @desc      add new signed service
// @route     Get /service
// @access    Private
const addService = asyncHandler(async (req, res, next) => {
  console.log('call addService');
  try {
    var item = req.body;
    var serviceNo = await pg
      .getconnection()
      .query("select nextval('sq_service_no') as service_no");
    serviceNo = String(serviceNo['rows'][0]['service_no']);

    item['serviceNo'] = getTodayYYMMDD() + getSequenceNumber(serviceNo, 8);

    var query = mybatisMapper.getStatement(
      'service',
      'addService',
      item,
      format
    );

    var results = await pg.getconnection().query(query);

    if (results['rowCount'] === 1) {
      return res.send({
        MESSAGE_CODE: '01',
        MESSAGE_NAME: 'Success',
        rowCount: results['rowCount'],
        list: results['rows'],
      });
    } else {
      return res.send({
        MESSAGE_CODE: '02',
        MESSAGE_NAME: 'Fail',
        list: results,
      });
    }
  } catch (err) {
    console.log('err', err);
    return res.send({
      MESSAGE_CODE: '02',
      MESSAGE_NAME: 'Fail',
      error: err,
    });
  }
});

module.exports = { addService };
