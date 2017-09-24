/**
 * Created by likai on 17/2/11.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chapter4');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    // yay!
});

var loginSchema = new mongoose.Schema({
    username:String,
    password:String
});
var login = db.model("login",loginSchema,"login");
//var user1 = new login({username:"Lear",password:"test"});
//user1.save(function (err) {
//    if (err) return handleError(err);
//    console.log("saved!");
//});

var blogListSchema = new mongoose.Schema({
    title:String,
    kind:String,
    date:String
});
var blogList = db.model("blogList",blogListSchema,"blogList")

var blogContentSchema = new mongoose.Schema({
    title:String,
    content:String
})
var blogContent= db.model("blogContent",blogContentSchema,"blogContent")


function validateLogin(username,callback){
     login.find({username:username},function(err,doc){
        callback(doc);
    })
}

function getBlogList(kind,callback){
    var query = {};
    if(kind){
        query = {kind:kind}
    }else{
        query = {}
    }
    blogList.find(query,function(err,doc){
        callback(doc)
    })
}

function updateBlogList(title,kind,calllback){
    var date = new Date();
    var record = new blogList({title:title,kind:kind,date:date});
    record.save(callback(err));
}

function saveBlog(tilte,content){

}

function getBlogContent(blogId){

}

var dbAPI = {
    validate:validateLogin,
    getBlogList:getBlogList,
    saveBlog:saveBlog,
    getBlogContent:getBlogContent
}

module.exports = dbAPI;