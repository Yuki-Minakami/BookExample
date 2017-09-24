/**
 * Created by likai on 17/3/4.
 */
var stream = require("stream");
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url=="/"){
        var fileList = fs.readdirSync("./");
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end(fileList.toString());
    }
    else{
        var path = "."+req.url;
        try{
            var readStream = fs.createReadStream(path).pipe(res);
        }catch(e){
            res.end("file not exists");
        }

    }
})
var port = 3000;
server.listen(port);
console.log("Listening on 3000");

//处理异常
process.on("uncaughtException",function(){
    console.log("got error");
})

