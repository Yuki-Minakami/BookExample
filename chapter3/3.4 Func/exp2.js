/**
 * Created by likai on 2017/4/11.
 */
//var obj={}
//obj.func=function(){
//    console.log(this);//Object { func: [Function] }
//    (function(){
//        console.log(this)//Window/Global
//    })()
//}
//obj.func()

//    global.name = "Tom"
//var obj= {
//    name:"Lear",
//    func: function () {
//    setTimeout(()=>{
//        console.log(this);
//        console.log(this.name);
//    }, 100);
//}
//}
//obj.func()


function foo() {
    setTimeout(()=> {
        console.log(this.id);

    }, 100);
}
global.id = 21;
foo();