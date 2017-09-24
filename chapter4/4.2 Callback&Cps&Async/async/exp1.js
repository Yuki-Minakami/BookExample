/**
 * Created by likai on 2017/5/19.
 */
var func1 = function(){
    require("fs").readFile("1.txt",(err,data) =>{
       // console.log(data);
        return data;
    })
}

console.log(func1());


