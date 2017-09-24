/**
 * Created by likai on 17/1/21.
 */
const fs = require("fs");
const readFile_promise = function(path){
    var promise = new Promise(function(resolve, reject) {
        fs.readFile(path,function(err,data){
            if (data){
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    return promise;
}

module.exports = readFile_promise;

async function readasync(){
   var result =  await readFile_promise("1.txt").then(function(result){
       return result;
   });

}

readasync()

