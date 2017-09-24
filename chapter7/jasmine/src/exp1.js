/**
 * Created by likai on 17/3/11.
 */
var http = require("http");
var foo = {
    getRequest:function(url){
        http.get(url, function (data) {
            console.log(data.statusCode);
        })
    }
}

module.exports = foo;