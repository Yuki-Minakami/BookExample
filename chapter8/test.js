/**
 * Created by likai on 2017/4/18.
 */
var http = require("http");
for(var i=0;i<10000;i++){
    http.get("http://localhost:3000",function(err,result){

    });
}
process.on("uncaughtException",function(err){
    console.log(err)
})



