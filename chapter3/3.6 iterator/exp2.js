/**
 * Created by likai on 2017/7/2.
 */
var arr = [1,2,3];
console.log(arr[Symbol.iterator]);//[Function: values]

var set = new Set([1,2,3]);
console.log(set[Symbol.iterator]);//[Function: values]

var map = new Map([
    ["a",1],
    ["b",2],
]);
console.log(map[Symbol.iterator]);//[Function: entries]

var str = "Hello Node";
console.log(str[Symbol.iterator]);//[Function: [Symbol.iterator]]


var obj = {};
console.log(obj[Symbol.iterator]);//undefined，普通对象没有iterator接口


var Iter ={
    [Symbol.iterator] : function () {
        var i=0;
        return {
            next: function () {
                return ++i;
            }
        };
    }
};
console.log(Iter[Symbol.iterator]);//[Function: [Symbol.iterator]]




