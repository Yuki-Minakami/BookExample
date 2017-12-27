/**
 * Created by likai on 2017/4/30.
 */
var fs = require("fs");

fs.readFile("foo.txt",function(err,data){
   console.log(data);
   while(true){}//死循环阻塞了事件循环,后面所有的代码都不会执行
});

setTimeout(function(){
    console.log("done");
},1000);

