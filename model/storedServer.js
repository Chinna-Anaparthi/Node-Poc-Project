var database = require("../database/StoredDatabase");
require('body-parser')
var getempBankData = (req, res) => {
   
  var query = "call insertdata9('"+req.body.id+"','"+req.body.addr+"')"
  database.query(query, (err, empsaldata) => {
    if (err) 
    {
      res.send("DATA ALREADY EXITS ");
    }
     else 
    {
        if(req.body.id>=5)
        {
            res.send("ONLY 5 MEMBERS DATA AVAILBLE FROM DATABSE.")
        }
        else{
          res.send("DATA INSERTED")
         }
    }
})
}
var get = (req, res) => {
    var query = "select * from storingprocesser";
    database.query(query, (err, Storedresult) => {
      if (err) {
        res.send("Data Not Inserted");
      }
      else
      {
        res.send(Storedresult)
      }
    
    })
}

module.exports={getempBankData,get};