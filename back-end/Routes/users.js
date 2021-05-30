const router = require('express').Router();
let User = require('../models/user.model');


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({username, password})
  

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/login', async(req, res) => {
  let body = req.body;
  //console.log(body);
  const username = req.body.username;
  const password = req.body.password;
  const userData = await User.findOne({"username": username}
  
  )
  if(userData){
    console.log(userData);
    if(userData.password==password){
      res.send("login succefull");
    }else{
      res.send("user does not exist");
    }

  }else{
    res.send("user does not exist")
  }
    
  });
module.exports = router;