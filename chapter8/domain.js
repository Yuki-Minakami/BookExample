/**
 * Created by likai on 2017/4/18.
 */
const  fs = require("fs");
const d = require('domain').create();
d.on('error', (er) => {
    // The error won't crash the process, but what it does is worse!
    // Though we've prevented abrupt process restarting, we are leaking
    // resources like crazy if this ever happens.
    // This is no better than process.on('uncaughtException')!
    console.log(`error, but oh well ${er.message}`);
});
d.run(() => {
    require('http').createServer((req, res) => {
        console.log(undefinedObject.undefined);
    }).listen(3000);
});