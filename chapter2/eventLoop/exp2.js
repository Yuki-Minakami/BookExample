/**
 * Created by likai on 2017/9/27.
 */

/*-------下面是官方文档的例子----------*/

var timeoutScheduled = Date.now();

setTimeout(function () {
    var delay = Date.now() - timeoutScheduled;
    console.log(delay + "ms have passed since I was scheduled");
}, 100);

fs.readFile('foo.txt', function(err,data){
    var startCallback = Date.now();
    // do something that will take 10ms...
    while (Date.now() - startCallback < 1000) {
        ; // do nothing
    }
});
