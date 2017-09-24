/**
 * Created by likai on 17/3/1.
 */
var module1 = {
    value:1,
    test:function(){
        console.log(++this.value);
    }
};
//++module.value;
module.exports = module1;
