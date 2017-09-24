/**
 * Created by likai on 2017/4/22.
 */
var app = require('express')();
app.use(function(req,res, next){
    next();//首先调用middleware2
    console.log("middleware1")
});
app.use(function(req,res,next){
    process.nextTick(function(){
        console.log("middleware2");
        next();
    });
});

app.listen(3000);

