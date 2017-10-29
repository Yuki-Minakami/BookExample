/**
 * Created by likai on 17/2/27.
 */
var fs = require("fs");
var co = require("co");
const myReadFile = function(path){
    var promise = new Promise(function(resolve, reject) {
        fs.readFile(path,{encoding:"utf-8"},function(err,data){
            if (data){
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    return promise;
}
function *　gen(){
    var result = yield myReadFile("../test1.txt");
    console.log(result);
    var result2 = yield myReadFile("../test2.txt");
    console.log(result2);
}
//var g = gen();
//var result=g.next();
//result.value.then(function(data){
//    g.next(data).value.then(function(data){
//        g.next(data)
//    });
//})
//;

co(gen)
