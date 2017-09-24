/**
 * Created by likai on 17/3/4.
 */
var eventEmitter = require("events");
var myEmitter = new eventEmitter();
myEmitter.on("event",function(){
    console.log("event");
})
myEmitter.on("event",function(){
    console.log("event");
})
myEmitter.emit("event");
console.log(myEmitter.eventNames());
