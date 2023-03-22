const mysql=require('mysql2')

const connection1=mysql.createConnection(
{
    host:"localhost",
    user:"root",
    password:"root",
    database:"sirdata"
})
connection1.connect((err,res)=>
{

    if(err){
        console.log("failed")
    }
    else{
        console.log("storing procedure database connected")
    }
})

module.exports=connection1;