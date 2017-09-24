/**
 * Created by likai on 2017/9/24.
 */
var rs = require("fs").createReadStream('test.txt', {highWaterMark: 10});

// var data = '';
// rs.on("data", function (chunk){
//     data += chunk;
// });s
// rs.on("end", function () {
//     console.log(data);
// });

var data = [];
rs.on('data', function(chunk){
    data.push(chunk);
});
rs.on('end', function(){
    var buf = Buffer.concat(data);
    console.log(buf.toString('utf-8'))
});


