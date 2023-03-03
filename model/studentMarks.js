var database = require("../Database/DatabaseMarks");
var fs=require('fs')
var getdata1 = (req, res) => {
    let query1 = "select * from class7th";
    database.query(query1, (err, result) => {
    if (err) {
    res.send("Data Not Availble")
    } else {
        res.send(result)
        var a=result;
        for(var i=0;i<a.length;i++)
        {
            if(a[i].sub1>=35 &&a[i].sub2>=35&&a[i].sub3>=35)
            {
              
                
                fs.appendFileSync('text1.txt',a[i].stuname+"\n",(err)=>{
                    if(err){
                    console.log(err);
                    }
                    console.log('Success');
                    })
                    // fs.unlink("text1.txt", (err => {
                    //     if (err) console.log(err);
                    //     else {
                    //       console.log("\nDeleted file: example_file.txt");
                    //     }
                    // }))
            }
            else
            {
    
                fs.appendFileSync('text2.txt',a[i].stuname+"\n",(err)=>{
                    if(err){
                    console.log(err);
                    }
                    console.log('Success');
                    })
                    
            }
        }
    }
    });
    };
    module.exports = {getdata1 };