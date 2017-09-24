/**
 * Created by likai on 2017/5/3.
 */
var net = require('net');
var server = net.createServer(function(c) {
    // 'connection' listener
    console.log('client connected');
    c.on('end', function() {
        console.log('client disconnected');
    });
    c.write('hello\r\n');
    c.pipe(c);
});
server.on('error', function(err) {
    throw err;
});
server.listen(8124, function() {
    console.log('server bound');
});