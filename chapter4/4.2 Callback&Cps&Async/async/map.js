/**
 * Created by likai on 2017/5/24.
 */
var async = require("async");
var fs= require("fs");

function myReadFile(path,callback){
    fs.readFile(path,"utf-8",callback);
}

async.map(['1.txt','2.txt','3.txt'], myReadFile, function(err, results) {
    console.log(results);
});