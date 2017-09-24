
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

client.setAsync('name',"Lear").then(function(res) {
    console.log(res); // => 'bar'
});



async function redisTest(){
    await client.setAsync('name',"Lear");
    var result = await client.getAsync("name");
    console.log(result);
}

redisTest();