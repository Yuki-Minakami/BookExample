/**
 * Created by likai on 17/1/20.
 */
const fs = require("fs");
let i =0;
for(let i = 0; i<3;i++){
    console.log(i);
}
console.log(i);


function func1(x="Hello", y = 'Node') {
    console.log(x, y);
}

func1()

for(var i = 0;i<5;i++){}
console.log(i);//5