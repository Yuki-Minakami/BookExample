/**
 * Created by likai on 2017/4/30.
 */
var fs = require("fs");

fs.readFile("1.txt",function(err,data){
   console.log(data);
});

setTimeout(function(){
    console.log("done");
},1000);