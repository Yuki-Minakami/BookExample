const child = require('child_process').fork('worker.js');

// Open up the server object and send the handle.
const server = require('net').createServer();
server.on('connection', (socket) => {
    socket.end('handled by parent');
});
server.listen(1337, () => {
    child.send('server', server);
});