const {join} = require('path')
const {readFileSync} = require('fs')
const connection = require('../connection')
const sql = readFileSync(join(__dirname,'init.sql')).toString();
connection
.query(sql)
.then(()=>console.log('database connection succesfuly'))
.catch(()=>console.log('database fails connection'))
