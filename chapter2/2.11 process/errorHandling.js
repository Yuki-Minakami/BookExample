/**
 * Created by likai on 17/3/4.
 */
var eventEmitter = require("events");
var myEmitter = new eventEmitter();


process.on("uncaughtException",function(){
    console.log("got error");
})


console.log(3/i);

//var result = 3/0;
//myEmitter.on("ReferenceError",function(){
//    console.log("event");
//})
//myEmitter.emit("error",new Error("crash!"))