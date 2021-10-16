const express = require('express');
const app = express();
const pg = require('./DB/pg');
const { APP_PORT } = process.env;
const { generateFakeData } = require('./faker');

const routers =  require('./routes');

const server = async () => {
    try {   
        if (!APP_PORT) throw new Error('Please add .env file. Thanks')
             
        await pg.connectDB();

        app.use(express.json());            
        app.use(routers);
        
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