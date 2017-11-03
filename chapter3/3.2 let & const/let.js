/**
 * Created by likai on 17/3/13.
 */
for(let i = 0; i<3;i++){}
console.log(i);//undefined

for(var i = 0;i<5;i++){}
console.log(i);//5
/////////////////////////////
let a =15;
//let a= 5;//SyntaxError: Identifier 'a' has already been declared
function scope(){
    let a = 10;
    if(true){
        let a = 5;
    }
    console.log(a);//10
}
scope();
