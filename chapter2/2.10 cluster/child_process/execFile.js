/**
 * Created by likai on 2017/5/4.
 */
const exec = require('child_process').exec;

const child = exec('example', (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});

