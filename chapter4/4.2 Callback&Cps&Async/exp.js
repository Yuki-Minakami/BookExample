/**
 * Created by likai on 17/2/19.
 */
var fs = require("fs");
function read(path){
    fs.readFile(path,{encoding:"utf-8"},function(err,data){
        console.log(data);
    })
}
read("../test1.txt");
read("../test2.txt");
read("../test3.txt");




