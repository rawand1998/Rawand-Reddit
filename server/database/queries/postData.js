const connection = require('../connection')
const postData = (title,discription,image)=>{
    const sql ={
    text: `INSERT INTO post (title,discription,image)
    VALUES ($1, $2, $3,$4) RETURNING *`,
    values: [title, discription, image],
  };
  return connection.query(sql)
   
    .catch((error) => error);

};
module.exports=postData;