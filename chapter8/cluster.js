/**
 * Created by likai on 2017/4/18.
 */

const cluster = require('cluster');
const domain = require('domain');
const http = require('http');

if (cluster.isMaster) {
    //新建两个worker进程
    cluster.fork();
    cluster.fork();
    //当http访问出错时，会有一个worker退出，再新建一个worker进程
    cluster.on('disconnect', (worker) => {
        console.error('disconnect!');
        cluster.fork();
    });
} else {
    const server = http.createServer((req, res) => {
        const d = domain.create();
        d.on('error', (er) => {
            console.error(`error ${er.stack}`);
            //停止接收新的请求
            server.close();
            //触发cluster的disconnect事件
            cluster.worker.disconnect();

            res.statusCode = 500;
            res.setHeader('content-type', 'text/plain');
            res.end('Oops, there was a problem!\n');
            process.exit(1);
        });
        d.add(req);
        d.add(res);
        d.run(() => {
            handleRequest(req, res);
        });
    });
    server.listen(3000);
}


function handleRequest(req, res) {
    switch (req.url) {
        case '/error':
            //通过访问undefined的属性，确保在异步回调时出错
            setTimeout(() => {
                console.log(foo.bar)
            });
            break;
        default:
            res.end('ok');
    }
}


