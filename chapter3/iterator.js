/**
 * Created by likai on 2017/4/5.
 */
var async = require("async");
var fs = require("fs");

for(var i =0 ;i<3 ;i++){
    fs.readFile(i+".txt",function(err,data){
        console.log(data);
    })
}