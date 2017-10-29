/**
 * Created by likai on 2017/10/29.
 */
/**
 * Created by likai on 17/1/21.
 */
var myReadFile  = require("./readFile_promise");

myReadFile("./foo.txt").then(function(value){
    console.log(value.toString());
    return myReadFile("bar.txt")
}).then(function(value){
    console.log(value.toString());
    return myReadFile("baz.txt")
}).then(function(value){
    console.log(value.toString());
});



