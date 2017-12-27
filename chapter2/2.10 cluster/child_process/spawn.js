/**
 * Created by likai on 2017/5/4.
 */
var spawn = require('child_process').spawn;
var ls = spawn('ls',['-lh', '/usr']);

ls.stdout.on('data', function(data) {
    console.log("stdout:", data.toString());
});

ls.stderr.on('data', function(data) {
    console.log("stderr:", data.toString());
});

ls.on('close', function(code) {
    console.log("child process exited with code",code);
});

