/**
 * Created by likai on 2017/8/6.
 */
var co = require("co");
var readFile_promise  = require("../promise/readFile_promise");

function auto_exec(gen){
    function next(data){
        var result = gen.next(data);
        //判断执行是否结束
        if(result.done) return result.value;
        result.value.then(function(data){
            next(data)
        })
    }

    next();
}




function *　gen(){
    var result = yield readFile_promise("foo.txt");
    console.log(result);
    var result2 = yield readFile_promise("bar.txt");
    console.log(result2);
    return result
}
var g = gen();

var result = auto_exec(g)
console.log(result);
