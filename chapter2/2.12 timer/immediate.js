/**
 * Created by likai on 2017/5/2.
 */

setImmediate(function(arg) {
    console.log(`executing immediate: ${arg}`);
}, 'so immediate');

setTimeout(function(){
   console.log("timeout");
},0);

process.nextTick(function(){
   console.log("next Tick");
});
