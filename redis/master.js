/**
 * Created by likai on 2017/5/21.
 */
var child_process = require('child_process');


for(let i=0;i<4;i++){
    child_process.fork("consumer.js");
}