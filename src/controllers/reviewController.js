const asyncHandler = require('express-async-handler');
const { getTodayYYMMDD } = require('../utils/date'); 
const { getSequenceNumber } = require('../utils/common');

const pg = require('../DB/pg.js');
const mybatisMapper = require('mybatis-mapper');
const path = require('path');
mybatisMapper.createMapper([path.resolve(__dirname, '../sql/review.xml')]);

const format = {language: 'sql', indent: ' '};

// @desc      Get a Member
// @route     Get /:memberId
// @access    Private
const registerReview = asyncHandler(async (req, res, next) => {
  console.log('call registerReview')
  try {
        var item = req.body;

        var reviewNo = await pg.getconnection().query("select nextval('sq_review_no') as review_no");
        reviewNo = String(reviewNo['rows'][0]['review_no']);
        item['reviewNo'] = getTodayYYMMDD() + getSequenceNumber(reviewNo, 8);

        var query = mybatisMapper.getStatement("review", "registerReview", item, format); 
        var results = await pg.getconnection().query(query);

        console.log('results', results);

        if (results['rowCount'] === 1) {
            return res.send({
                MESSAGE_CODE: "01",
                MESSAGE_NAME: "Success",
                rowCount: results['rowCount'],
                list : results['rows']
            })
        } else {            
            return res.send({
                MESSAGE_CODE: "02",
                MESSAGE_NAME: "Fail",
                list : results
            })
        }
  } catch (err) { 
    console.log('Fail error while service getCategory')
    console.log('err', err);
    return res.send({
        MESSAGE_CODE: "02",
        MESSAGE_NAME: "Fail",
        error : err
    })
  } 
});

module.exports = { registerReview };