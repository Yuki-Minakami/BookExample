/**
 * Created by likai on 17/2/19.
 */
var eventEmitter = require("events");
var myEmitter = new eventEmitter();
myEmitter.on("event",function(){
    console.log("event");
})
myEmitter.emit("event");


