/**
 * Created by likai on 17/3/13.
 */
let a =15;
//let a= 5;//error
function scope(){
    let a = 10;
    if(true){
        let a = 5;
    }
    console.log(a);//10
}
scope()