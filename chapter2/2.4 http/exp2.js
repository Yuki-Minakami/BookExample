/**
 * Created by likai on 17/3/5.
 */
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/login") {
        //将req.method进行区分
        switch (req.method) {
            case "GET" :
                fs.createReadStream("login.html").pipe(res);//使用流来显示login.html
                break;
            case "POST" :
                dealPost(req,res);//自定义的处理方法
                break;
            default :
                console.log("other request");//其他的请求类型
        }
    }else{
        res.writeHead(302, {
            'Location': '/login'
        });
        res.end();//将所有的URL访问都转到/login路径来
    }
})

function dealPost(req,res){
   var body = "";
    req.on("data",function(data){
        body+=data; //使用字符串拼接的形式来获取表单内容
    });
    req.on("end",function(){
        console.log(body);
        res.end("end");
    });
}

server.listen(3000);