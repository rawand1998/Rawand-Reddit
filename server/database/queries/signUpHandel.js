const connection = require('../connection')
const signUpHandel = (name,email,password)=>{
  return connection.query('INSERT INTO users(name,email,password) values($1,$2,$3)',[name,email,password])
}
module.exports=signUpHandel;