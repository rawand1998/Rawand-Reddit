const connection = require('../connection')
const addComment = (content,user_id)=>{
    return connection.query('INSERT INTO comment (content,user_id) values($1,$2)',[content,user_id])

}
module.exports=addComment