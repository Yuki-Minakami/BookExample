/**
 * Created by likai on 2017/5/24.
 */
var async = require("async");
var fs= require("fs");
function func1 (callback){
    fs.readFile("1.txt","utf-8",callback);
}

function func2(callback){
    fs.readFile("2.txt","utf-8",callback);
}

function func3(callback){
    fs.readFile("3.txt","utf-8",callback);
}

async.series([func1,func2,func3],function(err,data){
    console.log(data);//[ '1.txt', '2.txt', '3.txt' ]
})
