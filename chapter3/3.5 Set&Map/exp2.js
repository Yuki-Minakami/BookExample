/**
 * Created by likai on 17/3/14.
 */
let set = new Set([1, 2, 3]);

for (let i of set.keys()) {
    console.log(i);// 1 2 3
}
for (let i of set.values()) {
    console.log(i); // 1 2 3
}
for (let i of set.entries()) {
    console.log(i); //[1,1] [2,2] [3,3]
}
