/**
 * Created by likai on 2017/5/11.
 */
var Loa = require("../application");
var app = new Loa();

async function timeout(ms) {
    await new Promise((resolve) => {

        setTimeout(resolve, ms);

    });
}

var middleWare1 = async function (req,res) {
    for(let i =0;i<5;i++){
        await timeout(1000);
        console.log(i);
    }
}

var middleWare2 =function (req,res) {

    console.log("I am Middleware2");
    res.end();
}

app.use(middleWare1,"middleware1");

app.use(middleWare2,"middleware2");

app.listen(8000);