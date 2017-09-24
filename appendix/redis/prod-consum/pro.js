/**
 * Created by likai on 17/2/16.
 */
var redis = require("redis");
var client  = redis.createClient('6379', '127.0.0.1');
client.on("error", function(error) {
    console.log(error);
});


var key = "demo:mq:test";
var msg = "hello world";
client.lpush(key, msg);