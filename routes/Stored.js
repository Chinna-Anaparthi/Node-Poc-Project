var express = require('express');
var router = express.Router();
var db1 = require("../Model/storedServer");

router.post("/insert", (req, res) => {
    db1.getempBankData(req, res, (data) => {});
  });
router.get("/get", (req, res) => {
    db1.get(req, res, (data) => {});
  });

module.exports = router;