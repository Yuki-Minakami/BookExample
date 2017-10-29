/**
 * Created by likai on 2017/5/18.
 */

var promises = ["foo.txt","bar.txt","baz.txt"].map(function (path) {
    return readFile_promise(path);
});

Promise.all(promises).then(function (results) {
    console.log(results); //results的内容是文本文件内容的顺序排列
}).catch(function(err){
    // ...
});


//////////////////////////////////////////////////////
function timeout(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, msg);
    });
}
timeout(1000).then(function(value){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, '1000ms passed');
    });
}).then(function(value){
    console.log(value); // 1000ms passed
});

//////////////////////////////////////
var promise = new Promise((resolve, reject) => {
    console.log('begin');
    resolve();
});

setTimeout(() => {
    promise.then(() => {
        console.log('end');
    })
}, 5000);


