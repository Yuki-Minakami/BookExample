/**
 * Created by likai on 2017/7/8.
 */
var p = Promise.resolve(require('fs').readFile('test.txt'));

p.then(function(data){
    console.log(data);
})