/**
 * Created by likai on 17/2/22.
 */
function* foo(x) {
    var y = 2 * (yield (x + 1));
    console.log(y);
    var z = yield (y / 3);
    return (x + y + z);
}

var a = foo(5);
console.log(a.next()) // Object{value:6, done:false}
console.log(a.next(8)) // Object{value:NaN, done:false}
console.log(a.next())