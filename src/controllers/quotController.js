const asyncHandler = require('express-async-handler');

const pg = require('../DB/pg.js');
const mybatisMapper = require('mybatis-mapper');
const path = require('path');
mybatisMapper.createMapper([path.resolve(__dirname, '../sql/quot.xml')]);

const format = {language: 'sql', indent: ' '};

const getQuotQuestions = asyncHandler(async (req, res, next) => {
    console.log('call getQuotQuestions')
    try {
        var item = req.body;

        var query = mybatisMapper.getStatement('quot', 'getQuotStep', item, format);    
        var stepSet = await pg.getconnection().query(query);  
        
        query = mybatisMapper.getStatement('quot', 'getQuotQustions', item, format); 
        var questionSet = await pg.getconnection().query(query);
        
        if (String(stepSet['rowCount']) !== '0') {
            let stepArray = stepSet['rows'];
            var stepLength = stepArray.length;
            var results = [];
            
            console.log('rows', stepSet['rows']);
            console.log('stepArray', stepArray);
            console.log('stepLength', stepLength);

            for (let i = 0; i < stepLength; i++) {
                item = stepArray[i];  

                if (String(questionSet['rowCount']) !== '0') {
                    let questionArray = questionSet['rows'];
                    var questionLength = questionArray.length;
                    var questions = [];
                    var object;
                    for (let j = 0; j < questionLength; j++) {
                        object = questionArray[j];
                        if (item['step'] === object['step']) {
                            questions.push(object);
                        }
                    }
                }
                item['questions'] = questions;
                
                results.push(item);
            }
        }

        if (String(stepSet['rowCount']) === '0') {
            return res.send({
            MESSAGE_CODE: "02",
            MESSAGE_NAME: "There is no data. Please check again",
            })
        } else {
            return res.send({
                MESSAGE_CODE: "01",
                MESSAGE_NAME: "Success",
                rowCount: stepSet['rowCount'],
                list : results
            })
        }
    } catch (err) {
        console.log('Fail error while service getCategory')
        console.log('err', err);
        return res.send({
            MESSAGE_CODE: "02",
            MESSAGE_NAME: "Fail",
            error: err
        })
    }
});

const addQuotStepQuestion = asyncHandler(async (req, res, next) => {
    console.log('call addQuotStepQuestion')
    try {
          var questionSet = req.body['quotStepQuestion'];
  
          if (Array.isArray(questionSet)) {
            questionSet.forEach( (item) => {
                  item['registerId'] = 'Admin';
                  item['step'] = Number(item['step']);
                  item['seq'] = Number(item['seq']);
                  item['questionOrder'] = Number(item['questionOrder']);

                  var query = mybatisMapper.getStatement("quot", "addQuotStepQuestion", item, format); 
                  
                  console.log('query', query);
  
                  pg.getconnection().query(query);
              })
          }
  
          return res.send({
              MESSAGE_CODE: "01",
              MESSAGE_NAME: "Success"
          })
  
    } catch (err) { 
      console.log('Fail error while addQuotStep')
      console.log('err', err);
      return res.send({
          MESSAGE_CODE: "02",
          MESSAGE_NAME: "Fail",
          error : err
      })
    } 
  });

// @desc      Get a Member
// @route     Get /:memberId
// @access    Private
const addQuotStep = asyncHandler(async (req, res, next) => {
  console.log('call addQuotStep')
  try {
        var stepSet = req.body['quotStep'];

        if (Array.isArray(stepSet)) {
            stepSet.forEach( (item) => {
                item['registerId'] = 'Admin';
                item['step'] = Number(item['step']);
                item['order'] = Number(item['order']);
                var query = mybatisMapper.getStatement("quot", "addQuotStep", item, format); 
                
                console.log('query', query);

                pg.getconnection().query(query);
            })
        }

        return res.send({
            MESSAGE_CODE: "01",
            MESSAGE_NAME: "Success"
        })

  } catch (err) { 
    console.log('Fail error while addQuotStep')
    console.log('err', err);
    return res.send({
        MESSAGE_CODE: "02",
        MESSAGE_NAME: "Fail",
        error : err
    })
  } 
});

module.exports = { addQuotStep, addQuotStepQuestion, getQuotQuestions };