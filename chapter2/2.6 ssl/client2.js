/**
 * Created by likai on 2017/5/6.
 */
var https = require("https");

https.get("https://localhost:3001",function(res){
    console.log(res);
})