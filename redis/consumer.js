/**
 * Created by likai on 2017/5/21.
 */
var redis = require("redis");
var bluebird = require("bluebird");
var EventEmitter = require("events");

var client  = redis.createClient('6379', '127.0.0.1');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client.on("error", function(error) {
    console.log(error);
});
client.on("ready",function(){
    console.log("ready");

})

class Consumer extends EventEmitter{
    constructor(){
        super();
        this.status = "ready";
    }
}

var consumer = new Consumer();

consumer.on("pause",function(){

        console.log("Consumer will pause");
        this.status = "pause";
});

consumer.on("resume",() => {
    if(this.status === "pause"){
        this.status = "begin";
        this.emit("begin");
    }
});

consumer.on('begin',async function(){
    this.status ="begin";
    while(true)
    {
        var value = await client.lpopAsync("mqTest");
        console.log(value);
        if(this.status === "pause" ){
            break;
        }
    }

})


async function getListLength(){
    //获取缓冲区大小
    var length  = await client.llenAsync("mqTest");

    if(length == 0 && consumer.status ==="begin"){
        console.log("我要pause");
        consumer.emit("pause");
    }else if(this.status ==="pause" && length >1000){
        //设置当生产者生产的数量大于1000时才启动消费者，避免在临界值附近反复切换状态

        consumer.emit("resume");
    }
    console.log("current length ",length);
}

consumer.emit("begin");
setInterval(getListLength,3000);//每隔1分钟检查一次