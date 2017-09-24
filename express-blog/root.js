/**
 * Created by likai on 17/1/26.
 */
var express = require("express");
var http = require("http");
var app = express();
var session = require('express-session');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-Parser');


 app.use(session({
         secret: '12345',
         name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
         cookie: {maxAge: 10000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
         resave: false,
         saveUninitialized: true,
 }));

app.use(cookieParser());
app.use(bodyParser());
require('./route')(app);


app.use(serveStatic(__dirname + '/static'));


var port = 3001;
