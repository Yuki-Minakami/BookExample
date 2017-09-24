/**
 * Created by likai on 17/1/18.
 */
process.env.TZ = "Africa/Algiers";
var date = new Date();
console.log(date);

var version  = process.version;
if(version > "v6.0.0"){
    console.log("Higher version than v6.0.0");
    //then......
}


process.on("exit",function(){
    console.log("process exit");
    //then.......
})

process.exit();