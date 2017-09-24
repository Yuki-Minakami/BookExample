/**
 * Created by likai on 17/1/19.
 */
var child_process = require("child_process");
var worker = child_process.fork("worker.js",["args1"]);
worker.on("exit",function(){
    console.log("child process exit");
});
worker.send({hello:"child"});
worker.on("message",function(msg){
    console.log("from child",msg);
})