const jwt = require('jsonwebtoken');
const { join } = require('path');

const authHandle = (req, res, next) => {
 
  const token = req.cookies;
  
  if (token.access_token) {
    jwt.verify(token.access_token, process.env.secretKey, (err, jwt) => {
      if (err) {
        next(err);
      } else {
        next();
      }
    });
  } else {
    res.redirect('/sign-in');
  }
};

module.exports = authHandle;