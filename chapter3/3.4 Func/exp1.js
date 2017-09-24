/**
 * Created by likai on 17/3/14.
 */
function func(...args){
  for(let val of args){
      console.log(val);
  }
}
func(1,2,3);

//合并数组
var arr = [1,2,3];
var arr2 = [4,5];
console.log([...arr,...arr2]);//[ 1, 2, 3, 4, 5 ]
//将字符串转换为数组
var name = [..."Lear"];
console.log(name);//[ 'L', 'e', 'a', 'r' ]
//将多个参数传入函数，见上面的例子