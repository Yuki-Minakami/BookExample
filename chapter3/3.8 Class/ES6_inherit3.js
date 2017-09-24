/**
 * Created by likai on 2017/4/11.
 */
class Person{
    constructor(){
        this.name="Lear";
        this.sex= "male";
    }
    getInfo(){
        return this.name+ ","+this.sex
    }
}
class Student extends Person{
    constructor() {
        super();
        this.name = "Sue"
        this.sex = "Female"
    }
    print(){
        return super.getInfo();
    }
}
let student = new Student();
//console.log(stud.print());//Sue Female
//console.log(stud.getInfo())//Sue Female

console.log(Student.prototype.__proto__== Person.prototype);//true
console.log(student.__proto__== Student.prototype);//true

console.log(Student.prototype.constructor === Student);

console.log(Student.__proto__ === Person.prototype.constructor);

console.log(student.__proto__===Student.prototype);

