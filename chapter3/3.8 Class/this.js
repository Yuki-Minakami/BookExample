
/**
 * Created by likai on 17/3/13.
 */
class Student{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
        this.getInfo = ()=>{
            console.log("name:",this.name,"sex:",this.sex);
        }
    }
    //getInfo(){
    //    console.log("name:",this.name,"sex:",this.sex);
    //}
}


const stu = new Student();
stu.__proto__.sayHello = ()=>{
    console.log("Hello");
}
stu.sayHello()


