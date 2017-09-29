/**
 * Created by likai on 17/3/5.
 */
var http = require("http");
var fs = require("fs");
var formidable = require("formidable");

var server = http.createServer(function(req,res){
    if(req.url == "/upload"){
        switch (req.method){
            case "POST":
                dealUpload(req,res);
                break;
            case "GET":
                fs.createReadStream("upload.html").pipe(res);
                break;
        }
    }
});
function dealUpload(req,res){
    var form = new formidable.IncomingForm();//创建Formidable.IncomingForm对象
    form.keepExtensions = true;//保持原有的扩展名
    form.uploadDir = __dirname;//上传目录为当前目录
    form.parse(req,function(err,fields,files){
        if(err){throw err;}
        console.log(fields);//{ submit: 'submit' }
        console.log(files);
        res.writeHead(200, {"content-type": 'text/plain'});
        res.end('upload finished');
    })
}
server.listen(3000);


//{ file:File
//    {
//    domain: null,
//        _events: {},
//    _eventsCount: 0,
//        _maxListeners: undefined,
//        size: 2978715,
//        path: '/Users/likai/Desktop/workpace/BookExample/chapter2/http/upload_0382661bc1e2f959d1dfc7e936df6c0d.m4a',
//        name: '未命名 2.m4a',
//        type: 'audio/x-m4a',
//        hash: null,
//        lastModifiedDate: 2017-03-05T03:12:30.578Z,
//        _writeStream:
//}}