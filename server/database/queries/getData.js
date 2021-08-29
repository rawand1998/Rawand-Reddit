const connection = require('../connection')
const getData = (name)=>{
    const text ='SELECT * FROM post INNER JOIN users WHERE user.name=name ON (post.user_id = users.id);'
    return connection.query(text).then((data)=>data.rows).catch((error)=>error)
};

module.exports=getData;