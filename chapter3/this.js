/**
 * Created by likai on 17/1/20.
 */
var date ={
    year:2017,
    month:1,
    day:15,
    getTime:function(){
        var self = this;
        var func1 = function(){
            return self.year+"/"+self.month+"/"+self.day;
        }
       // var func1 = ()=>this.year+"/"+this.month+"/"+this.day;
        return func1();
    }
}

console.log(date.getTime());

var aa = 10 ;
console.log(global.aa);