  
const bcrypt = require('bcryptjs');

const hashPassword = (password, callback) => {
  bcrypt.hash(password, 10, (err, res) => {
    if (err) callback(err);
    else callback(null, res);
  });
};

module.exports = hashPassword;