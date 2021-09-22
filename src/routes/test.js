const express = require("express");
const router = express.Router();

const pg = require('../db/pg');
const mybatisMapper = require('mybatis-mapper');
const path = require('path');
mybatisMapper.createMapper([path.resolve(__dirname, '../sql/MST_Info.xml')]);

const format = {language: 'sql', indent: ' '};


const MAPPER_ID = "MST_Info";
const SQ_SELECT_MEMBER_NO = "checkConnection";

router.get("/login", async (req, res) => {
    console.log('call login');
    try {
        var item = {};
        var query = mybatisMapper.getStatement(MAPPER_ID, SQ_SELECT_MEMBER_NO, item, format); 

        var results = await pg.getconnection().query(query);
        item = results['rows'];

        console.log('results', item);

        return res.send({
            MESSAGE_CODE: "01",
            MESSAGE_NAME: "Success",
            item
          })
    } catch (err) {
        console.log('Fail login API !!!');
        console.log('err', err);     
        
        return res.send({ 
            err_code: "00",
            err_message: err 
        })
    }  
});

module.exports = router;
