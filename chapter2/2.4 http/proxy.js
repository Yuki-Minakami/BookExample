/**
 * Created by likai on 2017/5/1.
 */
var http = require("http");
var url = require("url");

http.createServer(function(req,res){
    console.log(req.url);
    var options = url.parse(req.url);
    options.headers = req.headers;

    var proxyRequest = http.request(options,function(pres){
        res.writeHead(pres.statusCode,pres.headers);
        pres.on('data',function (data) {
            res.write(data);
        });
        pres.on('end',function () {
           // res.end();
        });

    });

    req.on('data',function(data){
        proxyRequest.write(data);
    });

    req.on('end',function(){
       proxyRequest.end();
    });

}).listen(8080);


