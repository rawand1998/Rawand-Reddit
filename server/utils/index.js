const comparePassword = require('./comparePassword')
const hashedPassword = require('./hashedPassword')
const authHandle = require('./authHandle')
const signUpValiadtion = require('./valiadtion/signUpValiadtion')
module.exports={
    comparePassword,
    hashedPassword,
    authHandle,
    signUpValiadtion
}