/**
 * Created by likai on 17/3/4.
 */
var fs = require("fs");
function getAllFileFromPath(path) {
    fs.readdir(path, function (err, res) {
        for (var subPath of res) {
            var statObj = fs.statSync(path + "/" + subPath); //这里使用了同步方法而非异步
            if (statObj.isDirectory()) {//判断是否为文件夹
                console.log("Dir:", subPath);
                getAllFileFromPath(path + "/" + subPath)//如果是文件夹，递归获取子文件夹中的文件列表
            } else {
                console.log("File:", subPath);
            }
        }
    })
}
getAllFileFromPath(__dirname);