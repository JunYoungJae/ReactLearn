const asyncHandler = require('express-async-handler');
const pg = require('../../DB/pg');
const mybatisMapper = require('mybatis-mapper');
const path = require('path');
mybatisMapper.createMapper([path.resolve(__dirname, '../../sql/user/masterInfo.xml')]);
const format = {language: 'sql', indent: ' '};

const getMaster = asyncHandler(async (req, res, next) => {
    console.log('call getMaster');
    try {
        const _masterNo  = req.params['masterNo'];
        console.log('masterNo', _masterNo);
    
        var item = { masterNo: _masterNo, limit: 20, offset: 0 };     
        if (req.body['limit']) {
            item['limit'] = Number(req.body['limit']);
        }   
        if (req.body['offset']) {
            item['offset'] = Number(req.body['offset']);
        } 
         
        var query = mybatisMapper.getStatement("masterInfo", "getMasterBasicInfo", item, format);    
        var response = await pg.getconnection().query(query);
        console.log('query', query);

        query = mybatisMapper.getStatement("masterInfo", "getMasterPayment", item, format);    
        var paymentSet = await pg.getconnection().query(query);
        console.log('query', query);

        query = mybatisMapper.getStatement("masterInfo", "getMasterQnA", item, format);    
        var qnaSet = await pg.getconnection().query(query);
        console.log('query', query);

        query = mybatisMapper.getStatement("masterInfo", "getMasterService", item, format);    
        var serviceSet = await pg.getconnection().query(query);
        console.log('query', query);

        query = mybatisMapper.getStatement("masterInfo", "getMasterReviews", item, format);    
        var reviewSet = await pg.getconnection().query(query);
        console.log('query', query);

        if (String(response['rowCount']) === '0') {
            return res.send({
            MESSAGE_CODE: "02",
            MESSAGE_NAME: "There is no data. Please check again",
            })
        } else {
            delete response['oid'];
            delete response['fields'];
            delete response['_parsers'];
            delete response['_types'];
            delete response['RowCtor'];
            delete response['rowAsArray'];
    
            response['MESSAGE_CODE'] =  "01";
            response['MESSAGE_NAME'] = "Success";
            response['master'] = response['rows'];
            response['payment'] = paymentSet['rows'];
            response['qna'] = qnaSet['rows'];
            response['service'] = serviceSet['rows'];
            response['review'] = reviewSet['rows'];

            delete response['rows'];
            return res.send({
                response
            });
        }
    } catch (err) {
        console.log('err', err);
        return res.send({
            MESSAGE_CODE: "02",
            MESSAGE_NAME: "Fail",
            error: err
        })
    }
    
});

// @desc      getMasters
// @route     Get /
// @access    Public
const getMasters = asyncHandler(async (req, res, next) => {
    console.log('call getMasters')
    try {
        var item = { limit: 20, offset: 0, sort: "review" };    
        if (req.body['limit']) {
            item['limit'] = Number(req.body['limit']);
        }   
        if (req.body['offset']) {
            item['offset'] = Number(req.body['offset']);
        } 
        if (req.body['category']) {
            var list = String(req.body['category']).split(",").map(String);
            item['categoryList'] = list;
        }        
        if (req.body['sort']) {
            item['sort'] = String(req.body['sort']);
        }
        
        var query = mybatisMapper.getStatement("masterInfo", "getMasters", item, format);    
        var response = await pg.getconnection().query(query);
        console.log('query', query);

        if (String(response['rowCount']) === '0') {
            return res.send({
            MESSAGE_CODE: "02",
            MESSAGE_NAME: "There is no data. Please check again",
            })
        } else {
            delete response['oid'];
            delete response['fields'];
            delete response['_parsers'];
            delete response['_types'];
            delete response['RowCtor'];
            delete response['rowAsArray'];

            response['MESSAGE_CODE'] =  "01";
            response['MESSAGE_NAME'] = "Success";
            response['masters'] = response['rows'];
            delete response['rows'];
            return res.send({
                response
            });
        }
    
    } catch(err) {
        console.log('err', err);
        return res.send({
            MESSAGE_CODE: "02",
            MESSAGE_NAME: "Fail",
            error: err
        })
    }
});

module.exports = { getMasters, getMaster };