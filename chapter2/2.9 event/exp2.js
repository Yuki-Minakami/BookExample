/**
 * Created by likai on 17/2/19.
 */
var eventEmitter = require("events");
var fs = require("fs");
var myEmitter = new eventEmitter();
var i=0
var test =["test0.txt","test1.txt","test2.txt","test3.txt"]

function read(path){
    i++;
    fs.readFile(path,function(err,data){
        console.log(data.toString());
        myEmitter.emit("test");
    })
}
myEmitter.on("test",function(){
    if(i>3){
        return;
        process.exit()
    }
    read(test[i])
})

read(test[0])