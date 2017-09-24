/**
 * Created by likai on 17/1/19.
 */

console.log(process.env)
console.log(process.getuid());//用户ID
console.log(process.argv);//node 的命令行参数列表，argv[0]表示node，argv[1]表示当前文件路径
console.log(process.pid);//进程ID
console.log(process.cwd());//当前目录
console.log(process.version);//Node版本
process.exit()//退出进程
