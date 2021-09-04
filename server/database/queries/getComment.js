const connection = require('../connection')
const getComment =()=>{
    return connection.query('select content,name from comment join users on (comment.user_id = users.id)')

}
module.exports= getComment