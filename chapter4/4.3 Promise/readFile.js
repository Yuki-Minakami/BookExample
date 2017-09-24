/**
 * Created by likai on 2017/5/18.
 */
var fs = require("fs");

function readFile_promises(path){
    return  new Promise(function(resolve, reject) {
        fs.readFile(path,"UTF-8",function(err,data){
            if (data){
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}



//等价于下面的代码

readFile_promise("foo.txt").then(function(value){
    console.log(value.toString());
    return readFile_promise("bar.txt")
}).then(function(value){
    console.log(value.toString());
})




function timeout(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, msg);
    });
}


var promises = ["1.txt","2.txt","3.txt","4.txt"].map(function (path) {
    return read(path);
});

Promise.all(promises).then(function (results) {
    console.log(results); //results的内容是文本文件内容的顺序排列
}).catch(function(err){
    // ...
});

promise.then(function(value){
    console.log(value); // Hello World

    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, '1000ms passed');
    });

}).then(function(value){
    console.log(value); // 1000ms passed
})
