var fs = require('fs');

var timeoutScheduled = Date.now();

setTimeout(function () {
    var delay = Date.now() - timeoutScheduled;
    console.log(delay + "ms have passed since I was scheduled");
}, 100);

// Assume this takes 95ms to complete
fs.readFile('/path/to/file', function(err,data){
    var startCallback = Date.now();
    // do something that will take 10ms...
    while (Date.now() - startCallback < 10) {
        ; // do nothing
    }

});