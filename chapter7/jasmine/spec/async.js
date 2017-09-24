/**
 * Created by likai on 2017/6/5.
 */
var foo = require("../src/exp1.js");
describe("async test", function() {
    it("tracks that the spy was called", function(done) {
        foo.getRequest("http://baidu.com",function(data){
            expect(data.statusCode).toBe(200);
            done();
        });
    });
});
