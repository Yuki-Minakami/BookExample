/**
 * Created by likai on 17/3/2.
 */
var fs = require("fs");
//fs.stat("foo.txt",function(err,result){
//    if(err){
//        console.log(err);
//        return;
//    }
//    console.log(result);
//});


fs.open("foo.txt",'a',function(err,fd){
    if(err){
        console.log(err);
        return;
    }
    console.log(fd);
    fs.fstat(fd,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    })
})

