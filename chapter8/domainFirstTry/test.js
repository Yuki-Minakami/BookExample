/**
 * Created by likai on 2017/4/18.
 */
var http = require("http");

//首先启动domain.js
//短时间内发起大量http请求，可以在进程管理器中监测到明显的内存上升
for(var i=0;i<10000;i++){
    http.get("http://localhost:3000",function(err,result){

    });
}
process.on("uncaughtException",function(err){
    console.log(err)
});



