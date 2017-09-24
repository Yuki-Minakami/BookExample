/**
 * Created by likai on 17/2/19.
 */
var q = require("q");
var fs= require("fs");

function fs_readFile (path){
    var promise = q.nfcall(fs.readFile,path,"utf-8");
    return promise;
}
var count = 1;

fs_readFile("test1.txt").then(callback).then(callback).then(callback);

function callback(data){
    console.log(data);
    count++;
    return fs_readFile("test"+count+".txt")
}



