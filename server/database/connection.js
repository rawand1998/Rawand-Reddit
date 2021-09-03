const {Pool} =require('pg')
require('env2')('./config.env')
let dbUrl = '';

const { NODE_ENV, DB_URL, DATABASE_URL } = process.env;

switch (NODE_ENV) {
  case 'production':
   
    dbUrl = DATABASE_URL;
    break;
  case 'development':
    dbUrl = DB_URL;
    break;

  default:
    throw new Error('NO DATABASE to show!');
}

const options = {
    connectionString: dbUrl,
    
     ssl:
     {
      rejectUnauthorized: false,
    },
  };
  
module.exports = new Pool(options)