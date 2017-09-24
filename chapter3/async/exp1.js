var fs= require("fs");
fs.readFile("1.txt",function(err,data){
    fs.readFile("2.txt",function(err,data2){
        console.log(data.toString(),data2.toString());
    })
});

fs.readFile("1.txt",(err,data)=>(fs.readFile("2.txt",(err,data2)=>(console.log(data.toString(),data2.toString())))));