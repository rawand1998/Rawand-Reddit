const connection = require('../connection')
const addComment = (content,post_id,user_id)=>{
    return connection.query('INSERT INTO comment (content,post_id,user_id) values($1,$2,$3)',[content,post_id,user_id])

}
module.exports=addComment