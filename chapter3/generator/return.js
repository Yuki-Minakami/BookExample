/**
 * Created by likai on 2017/4/10.
 */
//function* Generator() {
//    yield console.log("Hello Node");
//    yield console.log("From Lear");
//    return "end"
//}
//var gen = Generator();
//gen.next();//"Hello Node"
//gen.return();
////return()方法后面的next不会被执行
//gen.next();


//function func1(x="Hello", y = 'Node') {
//    console.log(x, y);
//    let x = "hello"//SyntaxError: Identifier 'x' has already been declared
//    var y = "node"// 正常
//}
//func1();


function func(...args){
    for(let val of args){
        console.log(val);
    }
}
var args = [1,2,3]
func(...args);

console.log(process.EventEmitter)