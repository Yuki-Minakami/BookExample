/**
 * Created by likai on 2017/4/10.
 */
function *gen(x){
    var y = 0;
    yield  y = x+1;
    return "end";
}

var gen = gen(5);
//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next());
console.log(gen[Symbol.iterator]);//输出[Function: [Symbol.iterator]]