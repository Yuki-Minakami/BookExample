/**
 * Created by likai on 17/2/6.
 */
var utils = require("./utils.js");

var dbAPI = require("./db.js");

module.exports = function(app){
    app.get("/",function(req,res){
        console.log(req);
        res.end("Hello Node from Lear");
    });

    app.post("/write",function(req,res){
        utils.postData(req,res);
    });

    app.get("/write",function(req,res){
        res.render("html/write.html")
    });

    app.get("/blogList",function(req,res){
        res.render("html/blogList.html");
    });

    app.post("/admin",function(req,res){
        dbAPI.validate(req.body.username,function(doc){
            if(doc && doc[0].password == req.body.password){
                res.redirect("/html/admin.html");
               // res.cookie("logged","1",{ maxAge: 60000, httpOnly: true });
            }
        })

        //var promise = dbAPI.validate(req.body.username,req.body.password);
        //promise.then(function(doc){
        //    if(doc[0].password == password){
        //        res.redirect("/html/admin.html");
        //    }
        //    else {
        //        console.log("log in failed");
        //        res.redirect("/admin");
        //    }
        //});
    })
    app.get("/admin",function(req,res){
        if(utils.IFLoggedIn(req,res)){//not login
            res.redirect("/html/admin.html");
        }else{
            res.redirect("/html/login.html");
        }
        res.end();
    });
}