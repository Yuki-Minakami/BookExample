/**
 * Created by likai on 2017/4/10.
 */
/**
 * Created by likai on 2017/4/10.
 */
function* generator() {

    yield console.log(a);//a is not defined
    return "end";
};
var gen = generator();

try{
    gen.next();
}catch(e){

}

