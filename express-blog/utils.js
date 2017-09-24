/**
 * Created by likai on 17/2/6.
 */
var qs = require('querystring');
var fs = require('fs');

//var cookie = require("cookie");
//var cookieParser = require("cookie-Parser");

var dbAPI = require("./db.js");

var postData = function(req,res){
    var body = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){
        body += chunk;
    });
    req.on('end', function(){
        var obj = qs.parse(body);
        //console.log(body);
        console.log(obj);
        var title = obj.title;
        var content = obj.content;
        var status = saveContent(obj);
        if(status){
            res.render('static/html/'+obj.title+'.html');
        }else{
            res.end("500 internal error");
        }

    });
}
var saveContent = function(obj){
    var road = './static/'+obj.title+'.html';
    fs.open(road,'a',function opened(err,fd){
        if(err){throw err;}
        var writeBuffer = new Buffer(content);
        var bufferPosition = 0;
        var bufferLength = writeBuffer.length;
        var filePosition = null;
        fs.write(fd,
            writeBuffer,
            bufferPosition,
            bufferLength,
            filePosition,
            function wrote(err, written) {
                if (err) { throw err; }
                console.log('wrote ' + written + ' bytes');
            });
    });
    return 1;
}


var badRequest = function(req,res){
    res.end('500 bad request')
}

var dealLogin = function(req,res){
    console.log(req.body);
    if(dbAPI.validate(req.body.username,req.body.password)){
        console.log("success");
        return true;
    }else{
        return false;
    }

    //var body = '';
    //req.setEncoding('utf8');
    //req.on('data', function(chunk){
    //    console.log(chunk);
    //    body += chunk;
    //});
    //req.on('end',function(){
    //    var obj = qs.parse(body);
    //    console.log(body)
    //    var username = obj.username;
    //    var password = obj.password;
    //    if(username == "Lear"&&password== "admin"){
    //        res.cookie("logged","1",{ maxAge: 100000, httpOnly: true });
    //        console.log("cookie settled");
    //        return true;
    //    }
    //})

    //return false;
}

var IFLoggedIn = function(req,res){
    if(req.cookies.logged && req.cookies.logged==1){
        return true
    }
    return false;
}

var utils = {
    "postData":postData,
    "saveContents":saveContent,
    "badRequest":badRequest,
    "dealLogin":dealLogin,
    "IFLoggedIn":IFLoggedIn
}

module.exports = utils;