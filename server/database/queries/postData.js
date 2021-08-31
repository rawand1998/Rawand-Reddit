const connection = require('../connection')
const postData = (title,discription,user_id,image)=>{
    const sql ={
    text: `INSERT INTO post (title,discription,user_id,image)
    VALUES ($1, $2, $3,$4)`,
    values: [title, discription, user_id,image],
  };
  return connection.query(sql)
   
    .catch((error) => error);

};
module.exports=postData;