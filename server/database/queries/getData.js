const connection = require('../connection')
const getData = (name)=>{
    const text ='SELECT title,discription,image,name FROM post INNER JOIN USERS ON (POST.USER_ID =USERS.ID) WHERE users.name =$1,[name];'
    return connection.query(text).then((data)=>data.rows).catch((error)=>error)
};

module.exports=getData;