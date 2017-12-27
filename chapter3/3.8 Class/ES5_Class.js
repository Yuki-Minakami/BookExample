/**
 * Created by likai on 17/1/22.
 */
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.getInfo = function(){
    return this.name +","+this.age;
}

module.exports = Person;



