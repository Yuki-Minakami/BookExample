/**
 * Created by likai on 17/2/16.
 */
var redis = require("redis");
var client = redis.createClient(6379, "127.0.0.1");
client.on("error", function(err){
    console.log(err);
});
//client.subscribe("test");
client.on('message', function(channel,message){
    console.log("channel:" + channel + ", msg:"+message);
    client.publish("client","finish");

});
