const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mySchemas = require('../models/Schemas.js');

router.post('/User', (req, res) => {
    const userSchema = new mySchemas ({
        FullName: request.body.FullName,
        Email: request.body.Email,
        username: request.body.username,
        password: request.body.password

    })
    userSchema.save()
    .then(data=>{
        response.json(data);
    })
    .catch(error=>{
        response.json(error);
    })
})
router.get('/About')
module.exports = router
    

