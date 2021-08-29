const { compare } = require('bcryptjs');
const comparePassword =(password, hashedPassword, callback) => {
    compare(password, hashedPassword, (err, res) => {
      if (err) callback(err);
      else callback(null, res);
    });
  };
  module.exports=comparePassword;