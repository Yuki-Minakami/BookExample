/**
 * Created by likai on 2017/6/27.
 */

function* Generator() {
    yield "Hello Node";
    yield "From Lear"
    return "end"
}
var gen = Generator();

function auto_exec(gen){

    function next(data){
        var result = gen.next(data);
        //判断执行是否结束
        if(result.done) return result.value;
        result.value.then(function(data){
            next(data)
        })
    }

    next();
}

auto_exec(gen);
