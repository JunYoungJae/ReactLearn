const express = require('express');
const app = express();
const pg = require('./DB/pg');
const { APP_PORT } = process.env;
const { generateFakeData } = require('./faker');

const server = async () => {
    try {   
        if (!APP_PORT) throw new Error('Please add .env file. Thanks')
             
        await pg.connectDB();

        //await generateFakeData(100);
        //await generateCategoryData();
        //await generateMasterFakeData(100);

        app.use(express.json());
            
        app.use('/api', require('./routes/test'));
        app.use('/api/masters', require('./routes/user/masterRoute'));
        app.use('/api/members', require('./routes/user/memberRoute'));
        app.use('/api/review', require('./routes/reviewRoute'));
        app.use('/api/service', require('./routes/serviceRoute'));
        app.use('/api/categoryService', require('./routes/categoryServiceRoute'));
 
        // Server Port
        app.listen(APP_PORT, () => {
            console.log(`Server listen on port ${APP_PORT}`);            
        });
    } catch (err) {
        console.log('Fail Server starting !!!');
        console.log('err', err);  
    }
}

server();