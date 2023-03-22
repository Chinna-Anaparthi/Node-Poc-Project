const mysql=require('mysql2')

const connection=mysql.createConnection(
{
    host:"localhost",
    user:"root",
    password:"root",
    database:"cardata"
})
connection.connect((err,res)=>
{

    if(err){
        console.log("failed")
    }
    else{
        console.log("succefully connected")
    }
})

module.exports=connection;