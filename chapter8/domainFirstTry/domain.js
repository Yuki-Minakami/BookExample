/**
 * Created by likai on 2017/4/18.
 */
const  fs = require("fs");
const d = require('domain').create();
d.on('error', (er) => {
    //由于我们手动捕获了错误，因此进程不会退出，但这可能会引起严重的内存泄露
    //测试代码见test.js
    console.log('error, but oh well ${er.message}');
});
d.run(() => {
    require('http').createServer((req, res) => {
        console.log(undefinedObject.undefined);
    }).listen(3000);
});