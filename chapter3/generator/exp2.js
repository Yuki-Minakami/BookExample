
function* Generator() {
    yield "Hello Node";
    yield "From Lear"
    return "end"
}
var gen = Generator();
for(let i of gen){
    console.log(i);
    //输出结果
    // Hello Node
    //From Lear
}

// //和for/of循环等价
// Array.from(Generator())