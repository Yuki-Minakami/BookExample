/**
 * Created by likai on 17/3/12.
 */
var Person = new require("./ES6_Class");
function Student(name,age,sex){
    Student.prototype.constructor = Student;
    //this.name = name;
    //this.age = age;
    //this.sex = sex;
    Object.setPrototypeOf(Student.prototype,Person.prototype)
    Object.setPrototypeOf(Student,Person);
}

var student = new Student("Lear","30","male");
console.log(student);

student.print()
console.log(student instanceof  Student);

console.log(Student.__proto__ ==Person);//true