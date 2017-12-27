/**
 * Created by likai on 17/1/23.
 */
const Person = require('./ES5_Class');

function Student(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}
Student.prototype = new Person();
Student.prototype.getInfo = function(){
    return this.name +","+this.age +","+this.sex;
}
var student = new Student("Kai","male","20");
console.log(student.getInfo());

console.log(Student.prototype.__proto__== Person.prototype);//true

console.log(student.__proto__ == Student.prototype);//true

