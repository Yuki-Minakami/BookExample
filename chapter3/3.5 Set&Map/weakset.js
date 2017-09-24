/**
 * Created by likai on 2017/6/20.
 */
var wset =  new WeakSet();

wset.add({a:1,b:2});//success
//wset.add(1);//TypeError: Invalid value used in weak set
console.log(wset.size)


var array = [1,2,3,4,5]


