const connection = require('../connection')
const getData = ()=>{
const sql = 'SELECT * FROM post INNER JOIN users ON (post.user_id = users.id);';
console.log(sql)
return connection.query(sql).then((data)=>data.rows).catch((error)=>error)}
module.exports=getData