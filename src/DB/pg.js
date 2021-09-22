const { Pool, Client } = require('pg');
const { PG_USER, PG_PW, PG_HOST, PG_DATABASE, PG_PORT } = process.env;

const pool = new Pool({
    user: PG_USER,
    host: PG_HOST,
    database: PG_DATABASE,
    password: PG_PW,
    port: PG_PORT,
  });
  
const connectDB = async () => {
    try {

        var res = await pool.query('SELECT NOW()');
        console.log('res', res['rows'])
        console.log('POSTGRESQL Connected !!');
      
    } catch (err) {
        console.log('Fail DB connection !!!');
        console.log('err', err);        
    }
}
 
const getconnection = () => pool;
const disconnectDB = () => pool.end();

module.exports = { getconnection, disconnectDB, connectDB }