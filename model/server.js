var connection = require("../Database/database");
var joi = require("joi");
var bcrtpt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var check = joi.object({
  username: joi.string().min(4).max(25).email().required(),
  password: joi.string().min(8).max(100).required(),
});

var adddata = (req, res) => {
  const result = check.validate(req.body);

  if (result.error) {
    res.send(result.error.message);
  }
  let query = "select * from data1 where username='" + req.body.username + "'";
  connection.query(query, (err, result) => {
    if (result.length) {
      res.send("Data Exits");
    } else {
      bcrtpt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.send(err);
        } else {
          var username = req.body.username;

          let query =
            "insert into data1(username,password) values('" +
            username +
            "','" +
            hash +
            "')";

          connection.query(query, (err, data) => {
            if (err) {
              res.send(err);
            } else {
              res.send(data);
            }
          });
        }
      });
    }
  });
};
var getdata = (req, res) => {
  let query = "select * from data1 where username='" + req.body.username + "'";

  connection.query(query, (err, result1) => {
    if (err) {
    res.send("Data Availble In Database");
    }
    if (!result1.length) {
     res.send("Email or password is incorrect!",);
    }

    bcrtpt.compare(req.body.password, result1[0].password, (bErr, bResult) => {
      if (bErr) {
       res.status(401).send("Email or password is incorrect!");
      }
      if (bResult) {
        var user = {
          username: req.body.username,
          password: req.body.password,
        };
        jwt.sign(user, "secret", { expiresIn: "1hr" }, (err, data1) => {
          if (!err) {
            res.json(data1);
          } else {
            res.send("token not generated");
          }
        });
      } else {
        res.send("token not generated");
      }
    });
  });
};

module.exports = { adddata, getdata };
