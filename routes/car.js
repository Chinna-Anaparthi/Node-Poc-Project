var express = require("express");
var router = express.Router();
var db = require("../model/carServer");

router.post("/carData", (req, res) => {
  db.data(req, res, (data) => {});
});
module.exports = router;