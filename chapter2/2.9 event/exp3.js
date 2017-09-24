/**
 * Created by likai on 17/1/17.
 */
var fs = require("fs")
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter()
//如果该文件不存在，将会尝试创建它
fs.writeFile("./test.txt","Hello Node",{flag:"a",encoding:"utf8"},function(err){
    if(err){
        throw err;
    }
    event.emit("done");
});

event.on("done",function(){
   var data =  fs.readFile("test.txt",function(err,data){
       if(err) throw err;
       console.log(data.toString());
   });
});




