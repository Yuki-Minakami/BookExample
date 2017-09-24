/**
 * Created by likai on 17/2/20.
 */
var Q = require("q");
var fs= require("fs");
var fs_readfile=Q.nfcall(fs.readFile,'../test1.txt','utf-8');

fs_readfile.then(callback);

function callback(data){
    console.log(data)
}