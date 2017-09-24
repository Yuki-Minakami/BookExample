/**
 * Created by likai on 2017/5/23.
 */
var Person = function(name,age){
    this.name = name;
    this.age = age;
    this.greed= function(){
        console.log("Hello,I am ",this.name)
    }
}

function Student(){

}
Student.prototype = Person;
//Object.setPrototypeOf(Student,Person);

var stud = new Student();
console.log(Object.getPrototypeOf(stud).name);