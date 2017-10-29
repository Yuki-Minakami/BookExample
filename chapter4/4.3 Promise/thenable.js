/**
 * Created by likai on 2017/8/6.
 */
var obj = {
    then :function(){
        console.log("I am a  method");
    }
}
Promise.resolve(obj);