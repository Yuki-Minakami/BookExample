/**
 * Created by likai on 17/2/21.
 */
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());
app.use(session({
    secret: 'test',
    name: 'test',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {expires: new Date(Date.now() + 30000) }  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期

}));

app.get('/page1', function(req, res){
    res.send("Session will expire in: " + req.session.cookie.maxAge);
});

app.listen(5000);