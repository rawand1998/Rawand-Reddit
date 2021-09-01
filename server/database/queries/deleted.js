const connection = require('../connection')
const deleted = (postId)=>{
   
   
    return connection.query('DELETE FROM post WHERE user_id=$1',[postId])
}
module.exports=deleted