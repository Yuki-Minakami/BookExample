/**
 * Created by likai on 17/1/24.
 */
class Person {
    static getName(){
        return "Lear";
    }
}

Person.getName();//Lear
var person = new Person();
person.getName();//error!

class Student extends Person{
    static getName2(){
        return super.getName() + ",Hi";
    }
}

//var student = new Student(); //error
console.log(Student.getName2())