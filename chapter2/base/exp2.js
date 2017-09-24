/**
 * Created by likai on 17/2/28.
 */
String.prototype.reverse = function(){
    var str2="";
    for(var i=0;i<this.length;i++){
        str2+=this.charAt(this.length-i-1);
    }
    return str2;
}
var str1 = new String("str1");
var str3 = "str3"
console.log(str1.reverse());//1rts
console.log(str3.reverse());//1rts



