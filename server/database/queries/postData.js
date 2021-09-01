const connection = require('../connection')
const postData = (title,discription,user_id)=>{


    const sql ={
      
    text: `INSERT INTO post (title,discription,user_id)
   
    VALUES ($1, $2, $3)`,
    values: [title, discription,user_id],
  };
  return connection.query(sql)

};
module.exports=postData;