/**
 * Created by likai on 17/2/27.
 */
var fs = require("fs");
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

var asyncReadFile = async function () {
    var result1 = await readFile('../test1.txt');
    var result2 = await readFile('../test2.txt');
    console.log(result1.toString());
    console.log(result2.toString());
};
asyncReadFile()