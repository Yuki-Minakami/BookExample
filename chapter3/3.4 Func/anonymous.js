/**
 * Created by likai on 17/1/20.
 */
var func1 = a => a;
//等价于
var func1 = function(a){
    return a;
}

var func2 = (arg1="Hello",arg2="Node")=> console.log(arg1,arg2);

func2();