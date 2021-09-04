const express = require('express')
const {join}= require('path')
const fetch = require('node-fetch')
const { sign  } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

 const comparePassword  = require('../utils/comparePassword')
 const hashPassword = require('../utils/hashedPassword')
 const auth = require('./utiles/authHandle')
 const signUpValiadtion = require('../utils/valiadtion/signUpValiadtion')
 const signinValiadtion = require('../utils/valiadtion/signInValiadtion')
const {getData ,postData ,signHandle,signUpHandel,deleted,addComment,getComment}= require('../database/queries/index');





router.get('/post', (req, res) => {
    getData()
      .then((result) => res.json(result))

      .catch((err) => err);
  });

  
router.post('/post-data', (req, res) => {
  
  console.log(post_id)
  const cookies = req.cookies.access_token;
   
  const decoded = jwt.decode(cookies);
 
  const user_id =decoded.id;
 
postData(req.body.title,req.body.discription,user_id,req.body.image)

    
    .then(()=>res.redirect('/'))
    .catch((error)=>{console.log(error)})
});
router.get('/sign-in',(req,res)=>{
  res.sendFile(join(__dirname,'..','..','public','sign-in.html'))
})
router.post('/sign-in',(req,res)=>{
  const { email, password } = req.body;
const {error,value}=signinValiadtion.validate({email,password});
if(error){
  res.sendFile(join(__dirname, '..', '..', 'public', '400.html'));
}else{
  signHandle(email).then(( {rows}) => {
  
    
    if (!rows.length) {
      res.cookie('error', 'You\'ve entered an unvalid email');
      res.redirect('/sign-in');
    } else {
     const { id,name, password: hashPass } = rows[0];
    
      comparePassword(password, hashPass, (err, isMatchPass) => {
      if (isMatchPass) {
       sign(
         {id,name, email }, process.env.secretKey, (err, token) => {
           
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
  }
});
router.get('/sign-up',(req,res)=>{
  res.sendFile(join(__dirname,'..','..','public','sign-up.html'))
})
router.post('/sign-up',(req,res)=>{
  const { name, password, email } = req.body;
 const { error, value } = signUpValiadtion.validate({ name, password, email });
  if (error) {
    res.sendFile(join(__dirname, '..', '..', 'public', '400.html'));
  } else {
    hashPassword(password, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        signUpHandel(name, email,hashedPassword, )
          .then(() => res.redirect('/sign-in'))
          .catch(() => {
            res.cookie('error', 'This email already used');
            res.redirect('/sign-up');
          });
      }
    });
 }
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
router.get('/form-add',(req,res)=>{
  res.sendFile(join(__dirname,'..','..','public','addpost.html'))
})
router.get('/check-user', auth, (req, res) => {
    const cookies = req.cookies.access_token;
   
    const decoded = jwt.decode(cookies);
    
    res.json(decoded.name);
  });
  router.get('/logout',(req,res)=>{
    res.clearCookie('access_token');
    res.redirect('/');
  })
  router.get('/delete',(req,res)=>{

    const cookies = req.cookies.access_token;
   
  const decoded = jwt.decode(cookies);
  console.log(decoded)
  const postId =decoded.id;
   
    deleted(postId)
    .then(() => res.redirect('/'))
    .catch((error) => {
     console.log(error)
    });
  })


  router.post('/getComment',(req,res)=>{
    const cookies = req.cookies.access_token;
    const decoded = jwt.decode(cookies);
    const user_id =decoded.id;
    console.log(req.body.content)
    addComment(req.body.content,user_id)
    .then(()=>res.redirect('/'))
    .catch((error)=>console.log(error))

  })
  router.get('/getComment',(req,res)=>{
    getComment()
    .then((result) => res.json(result))
    .catch((err) => err);
   })

  router.get('/comment',(req,res)=>{
    res.sendFile(join(__dirname,'..','..','public','addcomment.html'))
  })
module.exports =router;