/**
 * Created by likai on 2017/5/23.
 */
var obj ={
    "name":"lear",
    "age":10,
    "sex":"male"
}

Object.defineProperty(obj, 'sex', {
    value: "male",
    enumerable: false
});

for(var key in obj){
    //name--lear
    //age--10
    console.log(key+"--"+obj[key]);
}

console.log(Object.keys(obj));//[ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(obj));//[ 'name', 'age', 'sex' ]
