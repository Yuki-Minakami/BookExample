/**
 * Created by likai on 17/1/19.
 */
//环境变量
console.log(process.env)
console.log(process.getuid());//用户ID
console.log(process.argv);//node 的命令行参数列表，argv[0]表示node，argv[1]表示当前文件路径
console.log(process.pid);//进程ID
console.log(process.cwd());//当前目录
console.log(process.version);//Node版本


//判断版本
var version  = process.version;
if(version > "v6.0.0"){
    console.log("Higher version than v6.0.0");
    //then......
}

//监听事件
process.on("exit",function(){
    console.log("process exit");
    //then.......
})

process.exit();