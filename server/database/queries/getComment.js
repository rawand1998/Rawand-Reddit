const connection = require('../connection')
const getComment =(postId)=>{
    return connection.query('select content ,name from comment inner join users on(comment.users_id =users.id) where comment.post_id =$1',[postId])

}
module.exports= getComment