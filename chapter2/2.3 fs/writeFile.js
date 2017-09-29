/**
 * Created by likaiboy on 2017/9/24.
 */
var fs = require("fs");
fs.writeFile("foo.txt","你好",{flag:"a",encoding:"UTF-8"}, function(err){
        if(err){
            console.log(err);
            return;
        }
        console.log("success");
    });
