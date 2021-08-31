const connection = require('../connection')
const getData = (name)=>{
    const text ='SELECT title,discription,image,name FROM post INNER JOIN USERS ON (POST.USER_ID =USERS.ID);'
    return connection.query(text).then((data)=>data.rows).catch((error)=>error)
};

module.exports=getData;