const connection = require('../connection')
const signHandle = (email)=>{
  return connection.query('SELECT * FROM users WHERE email= $1', [email])
}
module.exports=signHandle;