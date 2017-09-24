/**
 * Created by likai on 17/2/19.
 */
var fs = require("fs");
function callback1(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        fs.readFile("../test2.txt",{encoding:"utf-8"},callback2);
    }
}
function callback2(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        fs.readFile("../test3.txt",{encoding:"utf-8"},callback3);
    }
}
function callback3(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}
fs.readFile("../test1.txt",{encoding:"utf-8"},callback1);