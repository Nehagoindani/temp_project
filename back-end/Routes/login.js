const router = require('express').Router();
const Login =require('../models/login.model');


router.post('/', async(req, res) => {
    let body = req.body;
    Login.find({},(err,result)=>{
      if(err){
        res.send(err)
      }
      else{
        res.send(result)
      }
    })
      
    });
module.exports = router









