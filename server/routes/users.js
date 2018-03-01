var express = require("express");
var app = express();
var db = require("../models/db.js");

/* GET users listing. */
app.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.post('/registered', function (req, res, next) {
   var pram = {
         userName:req.body.username,
         phoneNumber:req.body.phonenumber,
         passWord:req.body.password
   };
  //链接数据库
  db.insertOne("teacher", pram, function (err, result) {
    if(err){
      res.json({
        status:"1",
        masg:err.message
      })
    }else {
      res.json({
          status:"0",
          masg:"注册成功"
      })
    }
  });
});

app.post('/login', function(req, res, next) {
  res.send('登录成功');
});


module.exports = app;
