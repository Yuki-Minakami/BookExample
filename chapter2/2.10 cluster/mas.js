/**
 * Created by likai on 2017/5/27.
 */

var fs = require("fs");
var out = fs.openSync("./out.txt","a");
var err = fs.openSync("./err.txt","a");

var child = require("child_process").fork("./worker1.js",[],{stdio:['ignore',out,err,'ipc']});



child.unref();