/**
 * Created by likai on 2017/5/20.
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

class Producer extends EventEmitter{
    constructor(){
        super();
        this.status ="ready";
        //ID即为生产者生产的资源
        this.id = 0;
    }
}
var producer = new Producer();

producer.on("pause",function(){
    if(this.status === "begin"){
        console.log("Producer will pause,current id",this.id);
        this.status = "pause";
    }

});

producer.on("resume",() => {
    if(this.status === "pause"){
        this.status = "begin";
        this.emit("begin");
    }
});

producer.on("begin",async function(){
    this.status = "begin";
    while(true && this.id<100){
        //如果当前状态变为pause，停止生产
        if(this.status === "pause"){
            break;
        }
        var msg = 'Hello'+this.id;
        //生产的资源写入redis
        await client.lpushAsync("mqTest",msg);
        ++this.id;
    }
});

async function getListLength(){
    //获取缓冲区大小
   var length  = await client.llenAsync("mqTest");
   //当缓冲区的数量到达100000时，暂停生产
   if(length > 100000){
       producer.emit("pause");
   }else if(this.status ==="pause"){
       //缓冲区大小低于阈值，恢复执行
       producer.emit("resume");
   }
}
producer.emit("begin");

setInterval(getListLength,60000);//每隔1分钟检查一次
