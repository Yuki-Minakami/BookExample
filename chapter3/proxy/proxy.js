/**
 * Created by likai on 17/2/14.
 */
var proxy = new Proxy(Buffer,{
   getStr:function(target, property){
       return "str";
   }
});

var obj = Object.create(proxy);
obj.getStr()


var str = new Buffer("test")


console.log(str.toString());