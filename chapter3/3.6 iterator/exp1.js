/**
 * Created by likai on 2017/5/20.
 */
var Iter ={
    [Symbol.iterator] : function () {
        return {
            next: function () {
                return {value: 1,done: true};
            }
        };
    }
}

var obj = new Iter[Symbol.iterator]();
obj.next(); //{ value: 1, done: true }

console.log(obj.next());