/**
 * Created by likai on 2017/5/8.
 */

async function myReadFile(path){
    var promise = new Promise(function(resolve, reject) {
        require("fs").readFile(path,"utf-8",function(err,data){
            if (data){
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
    return promise;
}



// async function readFile(){
//     var result1 = await myReadFile("1.txt");
//     console.log(result1);// I am 1.txt
//     var result2 = await myReadFile("2.txt");
//     console.log(result1);// I am 1.txt
// }
// readFile();
//
// //等价于下面的代码
//
// myReadFile("1.txt").then(function(value){
//     console.log(value.toString());
//     return myReadFile("2.txt")
// }).then(function(value){
//     console.log(value.toString());
// })



async function readFile() {
    const [result1, result2] = await Promise.all([
        myReadFile("1.txt"),
        myReadFile("2.txt"),
    ]);
    console.log(result1, result2);
}

// 等价于下面的代码
function readFile() {
    return Promise.all([
        myReadFile("1.txt"),
        myReadFile("2.txt"),
    ])
        .then((result) => {
        console.log(result);
    });
}



async function readFile() {
    try {
        await myReadFile(a-path-not-exists);
    } catch (err) {
        console.error(err);
    }
}

// 等价于下面的代码
function asyncFunc() {
    return myReadFile(a-path-not-exists)
        .catch(err => {
            console.error(err);
        });
}


async function readFile(){
    for(let i= 1;i<5;i++ ){
        var result = await myReadFile(i+'.txt');
        console.log(result);
    }
}

async function readFile(list){
    list.forEach(async function(item){
        var result = await myReadFile(item);
        console.log(result);
    })
}

/*-------------------------------------------------*/
async function readFile3(list){
    for(var item of list){
        var result = await myReadFile(item);
        console.log(result);
    }
}
//readFile3(['1.txt','2.txt','3.txt','4.txt'])

async function readFile4(list){
   await Promise.all(list.map(async function(item){
       var result = await myReadFile(item);
       console.log(result);
   }));
}
readFile4(['1.txt','2.txt','3.txt','4.txt'])