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


var stud = new Student();
Object.setPrototypeOf(stud,Person);
console.log(stud.__proto__);//[Function: Person]


