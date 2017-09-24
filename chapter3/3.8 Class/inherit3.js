/**
 * Created by likai on 2017/4/12.
 */
function Person(name,age){
    this.name = name;
    this.age = age;
    this.greed= function(){
        console.log("Hello,I am ",this.name)
    }
}

Person.prototype.getInfo = function(){
    console.log(this.name + ","+ this.age);
}



function Student(name,age,sex){
    Person.call(this);
    this.name = name;
    this.age = age
    this.sex = sex;
}

var temp = function(){}
temp.prototype = Person.prototype;

Student.prototype = new temp();
var stud = new Student("Lear",10,"male");
stud.greed();//Hello,I am  Lear
stud.getInfo();//Lear,10