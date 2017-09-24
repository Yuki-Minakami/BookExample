/**
 * Created by likai on 17/3/15.
 */
var obj = {"c":3};
var map = new Map([
    ["a",1],
    ["b",2],
    [obj,3]
]);
console.log(map.size);//map的元素数量
console.log(map.has("a"));//判断是否存在键值对
console.log(map.get("b"));//获取某个键值对的值
map.set("d",4);//如果键值不存在，则增加新的键值对，否则覆盖原有值
map.delete("d");//删除某个键值对，返回一个布尔值
for(let key of map.keys()){
    console.log(key); //a b {c:3}
}
for(let value of map.values()){
    console.log(value);//1 2 3
}
for(let m of map.entries()){
    console.log(m);//[ 'a', 1 ] [ 'b', 2 ] [ { c: 3 }, 3 ]
}
map.clear();//清空map
