/**
 * Created by likai on 2017/4/9.
 */
async function timeout(ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(ms) {
    for(let i =0;i<5;i++){
        await timeout(ms);
        console.log(i);
    }
}

async function test(){
    await   asyncPrint(1000);
    console.log("---------");
    await asyncPrint(2000);
}

test();


