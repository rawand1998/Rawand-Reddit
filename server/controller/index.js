const express = require('express')
const {join}= require('path')
const fetch = require('node-fetch')
const {getData ,postData}= require('../database/queries/index')
const router = express.Router();



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
module.exports =router;