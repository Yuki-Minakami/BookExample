/**
 * Created by likai on 17/2/28.
 */
//var fs = require("fs");
//fs.readFile("1.txt",function(err,data){
//    console.log(data);//<Buffer 48 65 6c 6c 6f 20 4e 6f 64 65>
//});

var buffer = new Buffer([0x48, 0x65,0x6c, 0x6c ,0x6f ,0x20 ,0x4e ,0x6f ,0x64 ,0x65]);
console.log(buffer.toString("utf-8",0,5));//"Hello"

var buffer = new Buffer("Hello Node");
var buffer2 = new Buffer("From 2017");
console.log(buffer);//<Buffer 48 65 6c 6c 6f 20 4e 6f 64 65>