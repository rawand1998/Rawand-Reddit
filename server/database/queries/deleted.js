const connection = require('../connection')
const deleted = ()=>{
    const text ='DELETE  FROM post'
   
    return connection.query(text)
}
module.exports=deleted