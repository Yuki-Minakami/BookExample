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
}
var student = new Student("Lear","30","male");


console.log(student instanceof  Student); //true
console.log(Student.prototype);// Student {}

console.log(student.__proto__=== Student.prototype);

console.log(Student.__proto__ === Person.prototype.constructor);//true

console.log(Student.__proto__ ==Person);//true


