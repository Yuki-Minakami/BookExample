/**
 * Created by likai on 17/1/22.
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

module.exports = Person;