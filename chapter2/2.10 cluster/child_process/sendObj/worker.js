process.on('message', (m, server) => {
    if (m === 'server') {
        server.on('connection', (socket) => {
            socket.end('handled by child');
        });
    }
});



