/**
 * Created by likai on 17/1/21.
 */
const fs = require("fs");
const myReadFile = function(path){
    var promise = new Promise(function(resolve, reject) {
        require("fs").fs.readFile(path,function(err,data){
            if (data){
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    return promise;
}

myReadFile("test1.txt").then(function(value){
    console.log(value.toString());
   return myReadFile("test2.txt")
}).then(function(value){
    console.log(value.toString());
    return myReadFile("test3.txt")
}).then(function(value){
    console.log(value.toString());
});



