/**
 * Created by likai on 17/1/22.
 */
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getInfo(){
        return this.name+ ","+this.age
    }
}

var person = new Person("Lear","20");
console.log(person.constructor == Person.prototype.constructor);//true
console.log(person.getInfo == Person.prototype.getInfo);//true
console.log(person.getInfo());

module.exports = Person;