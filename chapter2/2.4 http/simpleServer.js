/**
 * Created by likai on 17/1/18.
 */
var http = require("http")
var server = http.createServer(function(req,res){
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("Hello Node!")
});
server.on("connection",function(req,res){
    console.log("connected");
})
server.on("request",function(req,res){
    console.log("request");
});
server.listen(3000);


