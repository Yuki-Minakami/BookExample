/**
 * Created by likai on 2017/5/22.
 */
var myReadFile = require("./promise");

async function func(path){
    try{
        await myReadFile(path);
    }catch(e){
        console.log(e);
    }

}

func();


