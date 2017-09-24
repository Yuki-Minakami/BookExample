/**
 * Created by likai on 2017/6/27.
 */
var readFile_promise = require("./readFile_promise");

async function readFile(){
    var result1 = await readFile_promise("1.txt");
    console.log(result1);// I am foo.txt
    var result2 = await readFile_promise("2.txt");
    console.log(result1);// I am foo.txt
}
readFile();



var obj={}
obj.func=function(){
    //console.log(this);//Object { func: [Function] }
    (function(){
        console.log(this)//Window or Global
    })()
}
obj.func()

//console.log(process);