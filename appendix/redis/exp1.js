/**
 * Created by likai on 17/2/15.
 */
var redis = require("redis");
var bluebird = require("bluebird");

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

var client  = redis.createClient('6379', '127.0.0.1');
client.on("error", function(error) {
    console.log(error);
});
client.on("ready",function(){
   // console.log("ready");
})

client.set("name", "Lear", "EX",10,function (err, reply) {
    client.get("name", redis.print);
    setTimeout(function () {
        client.get("name", redis.print);
    },10000)

});



