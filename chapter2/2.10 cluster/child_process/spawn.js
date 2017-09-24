/**
 * Created by likai on 2017/5/4.
 */
// var spawn = require('child_process').spawn;
// var ls = spawn('ls',['-lh', '/usr']);
//
// ls.stdout.on('data', function(data) {
//     console.log("stdout:", data.toString());
// });
//
// ls.stderr.on('data', function(data) {
//     console.log("stderr:", data.toString());
// });
//
// ls.on('close', function(code) {
//     console.log("child process exited with code",code);
// });




var Iter ={
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
    [Symbol.iterator] : function () {
        var i=0;
        return {
            next: function () {
                ++i;
                if(i>10) return 1;
                return [1,2,3];
            }
        };
    }
}



var obj = new Iter[Symbol.iterator]();



var str = "Lear"


for(var i of Iter){
    console.log(i)
}
console.log(str[Symbol.iterator]().next())


