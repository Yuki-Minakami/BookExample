/**
 * Created by likai on 17/3/14.
 */
var set = new Set([1,2,3,4,4,5]);//使用构造函数初始化一个set
console.log(set);//Set { 1, 2, 3, 4, 5 }
set.add(6);//向set添加一个值
set.delete(5);//从set删除一个值
set.has(6);//true
for(var i of set){
    console.log(i);//1 2 3 4 6
}
set.clear();//清除所有元素