/**
 * Created by likai on 17/3/5.
 */
var util = require('util');
var EventEmitter = require('events');
function MyEventEmitter() {//声明一个构造函数
    EventEmitter.call(this);//调用父类构造函数
}
util.inherits(MyEventEmitter, EventEmitter);//继承EventEmitter类
MyEventEmitter.prototype.publish = function(data) {//实现自定义的publish方法
    this.emit('data', data);
};
const myEventEmitter = new MyEventEmitter();
myEventEmitter.on('data', function(data){
    console.log('Received data:',data);
});
myEventEmitter.publish('It works!');

console.log(myEventEmitter instanceof EventEmitter);
console.log(MyEventEmitter.super_ === EventEmitter);

