/**
 * Created by likai on 2017/4/10.
 */
function* generator() {
    try{
        yield console.log( "Hello World");
    }catch(e){
        console.log(e)
    }
    console.log("test");
    yield  console.log("from Lear");
    return "end";
};
//输出
//Hello World
//throw error
//test
//from Lear
var gen = generator();
gen.next();
gen.throw("throw error");
