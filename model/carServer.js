var connection = require("../Database/carDatabase");
var joi = require("joi");
  const carDataSchema = joi.object({
    id:joi.string().min(1).max(10).required(),
    CarName:joi.string().valid('AUDI','BENZ',"TOYOTO").allow(null).insensitive().required(),
    CarNumber:joi.when('CarName',{is: joi.string().valid( 'BENZ'),then:joi.valid('1235','1234'),otherwise:joi.valid('others')}).required()
  })

var data = (req, res) => {
    const result = carDataSchema.validate(req.body);

  if (result.error) {
    res.send(result.error.message);
  }
  else{
let query =
"insert into cardetails(id,CarName,CarNumber) values('" +req.body.id+"','" +req.body.CarName+"','" +req.body.CarNumber +"')";

connection.query(query, (err, data) => {
if (err) {
  res.send(err);
} else {
  return res.status(200).json({ data: data });
}
});
}
}

module.exports = {data};