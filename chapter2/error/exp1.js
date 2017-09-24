/**
 * Created by likai on 17/3/4.
 */
 var fs = require("fs")
//fs.readFile("some file",function(err,data){
//    if(err){
//        throw err;
//    }
//})

const err = new Error('The message');
console.log(err.message);