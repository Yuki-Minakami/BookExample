/**
 * Created by likai on 17/2/18.
 */
var fs = require("fs");
var callback = function(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
}
fs.readFile("1.txt",callback);

