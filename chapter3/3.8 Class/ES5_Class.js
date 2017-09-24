/**
 * Created by likai on 17/1/22.
 */
//function Person (sex,age){
//    this.sex = sex;
//    this.age = age;
//}
//
//Person.prototype.getInfo = function(){
//    return this.sex + ',' + this.age;
//}
//
//var person = new Person("man","10");


class Person{
    constructor(sex,age){
        this.sex = sex;
        this.age = age;
    }
    getInfo(){
        return this.sex + ',' + this.age;
    }
}



var person = new Person("female","20");

console.log(person.constructor == Person.prototype.constructor);//true
console.log(person.getInfo == Person.prototype.getInfo);//true
console.log(person.getInfo());

