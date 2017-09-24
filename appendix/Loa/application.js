/**
 * Created by likai on 2017/5/10.
 */
const Context = require('./context');
const Emitter = require('events');
const http = require("http");

module.exports = class Loa extends Emitter{
    constructor(){
        super();
        this.middleware= [];
        this.nameList=[];
    }

    use(fn,name){
        this.middleware.push(fn);
        this.nameList.push(name);

    }


    async compose(req,res){
        var con = new Context(req,res);

        for(let i =0 ;i<this.middleware.length;i++){
            Context.prototype[this.nameList[i]] = this.middleware[i];
        }
        for(let i =0 ;i<this.middleware.length;i++){
           await con[this.nameList[i]](req,res);
        }
    }


    listen(port){
        var server = http.createServer((req,res)=>{
            this.compose(req,res);
        });
        return server.listen(port,function(){
            console.log("Listening on",port);
        });
    }
}

