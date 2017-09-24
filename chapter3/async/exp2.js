/**
 * Created by likai on 2017/8/2.
 */
async function test(){
    var data = await new Promise(function(resolve,reject){
        resolve("hah");
    });
    console.log(data);
}

test();