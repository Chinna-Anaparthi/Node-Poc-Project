const mysql=require('mysql2')

const connection=mysql.createConnection(
{
    host:"localhost",
    user:"root",
    password:"root",
    database:"studentdata"
})
connection.connect((err,res)=>
{

    if(err){
        console.log("failed")
    }
    else{
        console.log("succefully connected Database")
    }
})

module.exports=connection;