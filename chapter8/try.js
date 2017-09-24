/**
 * Created by likai on 2017/6/24.
 */
var fs = require("fs");

//debugger;
  var readStream = fs.createReadStream("foo.txt");
readStream.on('open',function(fd){
    console.log('开始读取文件');
});
readStream.on('data',function(data){
    console.log('读取到数据：');
    console.log(data);
});
    console.log("done");
// try{
//     JSON.parse(a.b);
// }catch(e){
//     console.log(e);
// }
