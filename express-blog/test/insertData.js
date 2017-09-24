/**
 * Created by likai on 17/2/15.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chapter4');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    // yay!
});
var blogListSchema = new mongoose.Schema({
    title:String,
    kind:String,
    date:String
});
var blogList = db.model("blogList",blogListSchema,"blogList")

var record  = new blogList({title:"blog1",kind:"",date:""});
var record2 = new blogList({title:"blog2",kind:"",date:""});
var record3 = new blogList({title:"blog3",kind:"",date:""});
var record4 = new blogList({title:"blog4",kind:"",date:""});
var record5 = new blogList({title:"blog5",kind:"",date:""});
var record6 = new blogList({title:"blog6",kind:"",date:""});
