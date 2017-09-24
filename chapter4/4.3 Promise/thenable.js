/**
 * Created by likai on 2017/8/6.
 */
var obj = {
    then :function(name){
        console.log("I am a  method",name);
    }
}
Promise.resolve(obj);