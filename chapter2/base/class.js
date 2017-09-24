/**
 * Created by likai on 17/3/1.
 */
function info(name,sex){
    this.name = name;
    this.sex = sex;
}
info.prototype = {
    getInfo:function(){
        console.log("name:"+this.name+" sex:"+this.sex);
    }
}
var stud1 = new info("lear","male");
stud1.getInfo()
var stud2 = new info("eva","female");
stud2.getInfo()
console.log(stud1 instanceof info);
console.log(stud2 instanceof info);
console.log(stud1.__proto__);//{ getInfo: [Function: getInfo] }