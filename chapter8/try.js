/**
 * Created by likai on 2017/6/24.
 */
var fs = require("fs");

//try/catch无法捕获错误，会出现Error: ENOENT: no such file or directory, open 'some file not exists.txt'
//应该使用监听error事件的方式来处理
try{
    var readStream = fs.createReadStream("some file not exists.txt");
}catch(err){
    console.log(err);
}

readStream.on("error",function(err){
    console.log(err);
});
