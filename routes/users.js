var express = require("express");
var router = express.Router();
var db = require("../Model/server");

router.post("/insert", (req, res) => {
  db.adddata(req, res, (data) => {});
});
// router.get('/get',(req,res)=>
// {
//   db.adddata(req,res,(data)=>
//   {

//   })
// })

router.post("/getlogin", (req, res) => {
  db.getdata(req, res, (data) => {});
});

module.exports = router;
