/**
 * Created by likai on 17/1/20.
 */
var readline = require("readline");
var  fs = require("fs");
var rl = readline.createInterface({
    input:fs.createReadStream("./1.txt")
});

rl.on("line", function(data){
    console.log(data);
});

rl.on("close",function(){
    console.log("cloesd");
})