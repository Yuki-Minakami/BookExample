/**
 * Created by likai on 17/1/19.
 */

var begin =  process.argv[2];
console.log("I am worker "+begin);
process.on("message",function(msg){
    console.log("from parent ",msg);
    process.exit();
});
process.send({hello:"parent"});

