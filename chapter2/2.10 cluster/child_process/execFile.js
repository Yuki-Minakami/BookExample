/**
 * Created by likai on 2017/5/4.
 */
const exec = require('child_process').exec;

//example是使用C语言编写的一个hello world程序，在mac平台下使用GCC编译，在windows上运行下面的代码可能会出现错误
const child = exec('example', (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});

