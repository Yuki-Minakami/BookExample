/**
 * Created by likai on 2017/5/2.
 */
setTimeout(function timeout (args) {
    console.log(args);
},0,'timeout');

setImmediate(function immediate () {
    console.log('immediate');
});

