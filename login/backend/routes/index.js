var express = require('express');
var router = express.Router();
var users=[{
  email:'abc@gmail.com', password:"pass@word1"
}]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('welcome to server');
});
router.post('/login',function(req,res){
  let result=users.find(user=>user.email==req.body.email);
  if(result){
    if(result.password==req.body.password){
    res.status(200).send({
      message:"suseccfullylogin!"
    })
  }else{
    res.status(200).send({
      message:"password incorrect!"
    })

  }
  }else{
    res.status(200).send({
      message:"user not found!"
    })
  }
})

module.exports = router;
