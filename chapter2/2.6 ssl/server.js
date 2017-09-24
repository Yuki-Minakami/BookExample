/**
 * Created by likai on 2017/5/6.
 */
var fs = require('fs');
var https = require('https');

var options = {
    key:fs.readFileSync('server.pem'),
    cert :fs.readFileSync('server-cert.pem'),
    ca : [fs.readFileSync('client-cert.pem')],
    requestCert:true
}

var server = https.createServer(options,function(req,res){
    var authorized = req.socket.authorized ? 'authorized' : 'unauthorized';
    console.log(authorized);
    res.writeHead(200);
    res.write('Welcome');
    res.end();
})

server.listen(3001);
