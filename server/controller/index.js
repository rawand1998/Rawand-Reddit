const express = require('express')
const {join}= require('path')
const fetch = require('node-fetch')
const { sign } = require('jsonwebtoken');
const router = require('express').Router();
 const comparePassword  = require('../utils/comparePassword')
 const hashPassword = require('../utils/hashedPassword')
// const {signUpValiadtion} = require('../utils/valiadtion/signUpValiadtion')
const {getData ,postData ,signHandle,signUpHandel}= require('../database/queries/index');
const { rmdirSync } = require('fs');




router.get('/post', (req, res) => {
    getData()
      .then((result) => res.json(result))

      .catch((err) => err);
  });

  
router.post('/post-data', (req, res) => {
postData(req.body.title,req.body.discription,req.body.image)
    .then(()=>res.redirect('/'))
    .catch(()=>{console.log(111)})
});
router.get('/sign-in',(req,res)=>{
  res.sendFile(join(__dirname,'..','..','public','sign-in.html'))
})
router.post('/sign-in',(req,res,next)=>{
  const { email, password } = req.body;

  signHandle(email).then(({ rows }) => {
    if (!rows.length) {
      res.cookie('error', 'You\'ve entered an unvalid email');
      res.redirect('/sign-in');
    } else {
      const { name, password: hashPass } = rows[0];
      comparePassword(password, hashPass, (err, isMatchPass) => {
        if (isMatchPass) {
          sign(
            {
              name,
              email,
            },
            process.env.secretKey,
            (err, token) => {
              res
                .cookie('access_token', token, {
                  httpOnly: true,
                })
                .redirect('/');
            },
          );
        } else {
          res.cookie('error', 'You\'ve entered a wrong password');
          res.redirect('/sign-in');
        }
      });
    }
  });
});
router.get('/sign-up',(req,res)=>{
  res.sendFile(join(__dirname,'..','..','public','sign-up.html'))
})
router.post('/sign-up',(req,res)=>{
  const { name, password, email } = req.body;
 // const { error, value } = signUpValiadtion.validate({ name, password, email });
  // if (error) {
  //   res.sendFile(join(__dirname, '..', '..', 'public', 'html', '400.html'));
  // } else {
    hashPassword(password, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        signUpHandel(name, hashedPassword, email)
          .then(() => res.redirect('/sign-in'))
          .catch(() => {
            res.cookie('error', 'This email already used');
            res.redirect('/sign-up');
          });
      }
    });
 // }
})
router.get('/404',(req,res)=>{
  res.sendFile(join(__dirname,'..','..','public','404.html'))
})
router.get('/500',(req,res)=>{
  res.sendFile(join(__dirname,'..','..','public','500.html'))
})
router.get('/400',(req,res)=>{
  res.sendFile(join(__dirname,'..','..','public','400.html'))
})
module.exports =router;