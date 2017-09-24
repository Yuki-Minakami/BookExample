/**
 * Created by likai on 2017/5/20.
 */
var a = {};

var i = 0;

while(i < 10) {
    a[i] = i;
    i++;
}
a.length = i;

var a1 = Array.prototype.slice.call(a);//需要增加call方法
a1.push(10); //success
console.log(a1);//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

var a2 = Array.from(a);//from不是定义在prototype上的
a2.push(10); //success
console.log(a2);//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]