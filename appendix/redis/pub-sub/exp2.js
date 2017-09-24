/**
 * Created by likai on 17/2/16.
 */
var redis = require("redis");
var fs = require("fs");
var client = redis.createClient(6379,"127.0.0.1");
client.on("error",function(err){
    console.log(err);
});
var list = ["txt1.txt","txt2.txt","txt3.txt"];
var i=0;

//client.subscribe("client");

client.on("ready",function(){
  //  console.log("ready");
    fs.readFile("txt1.txt",function(err){
        client.publish('test',"hello");
    })


});


//client.on("message",function(channel,msg){
//    i++;
//    if(i>2){
//        process.exit();
//    }
//  //  read(list[i],client);
//})

