/**
 * Created by likai on 17/1/22.
 */
const Person = require("./ES6_Class");

class Student extends Person{
    constructor(name,age,sex) {
        super(name, age);
        this.sex = sex;
    }
    getInfo(){
        return super.getInfo()+","+this.sex
    }
    print (){
        var info = this.getInfo()
        console.log(info);
    }
}
var student = new Student("Lear","30","male");


console.log(student instanceof  Student); //true
console.log(Student.prototype);// Student {}

console.log(student.__proto__=== Student.prototype);

//在ES6中运行
console.log(Student.__proto__ === Person.prototype.constructor);//true

