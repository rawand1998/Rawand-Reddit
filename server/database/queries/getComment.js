const connection = require('../connection')
const getComment =()=>{
    return connection.query('select * from comment')

}
module.exports= getComment