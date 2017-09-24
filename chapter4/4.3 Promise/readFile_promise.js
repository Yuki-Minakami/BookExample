/**
 * Created by likai on 2017/6/27.
 */
var fs = require("fs");

function readFile_promises(path){
    return  new Promise(function(resolve, reject) {
        fs.readFile(path,"UTF-8",function(err,data){
            if (data){
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

module.exports = readFile_promises;