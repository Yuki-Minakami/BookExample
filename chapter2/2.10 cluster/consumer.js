/**
 * Created by likai on 2017/5/21.
 */
var redis = require("redis");
var bluebird = require("bluebird");
var EventEmitter = require("events");
var request = require("../getURL/worker");

var client  = redis.createClient('6379', '127.0.0.1');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client.on("error", function(error) {
    console.log(error);
});
client.on("ready",function(){
    console.log("ready");
    consumer.emit("begin");
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
        //调用封装好的request方法
        let result = await request(value);
        //之后可以调用持久化方法进行存储，这里不再提供实现
        if(this.status === "pause" ){
            break;
        }
    }
})

async function getListLength(){
    //获取缓冲区大小
    var length  = await client.llenAsync("mqTest");

    if(length == 0 && consumer.status ==="begin"){
        consumer.emit("pause");
    }else if(consumer.status ==="pause" && length >1000){
        //设置当缓冲区大于1000时才启动消费者，避免在临界值附近反复切换状态
        consumer.emit("resume");
    }
    console.log("current length ",length);
}


setInterval(getListLength,30000);//每隔30s检查一次缓冲区