/**
 * Created by likai on 17/2/22.
 */
function* foo(x){
    var y = yield(x+1)
    y=10;
    return y;
}
var gen = foo(5);
console.log(gen.next());//{ value: 6, done: false }
console.log(gen.next());//{ value: 10, done: true }