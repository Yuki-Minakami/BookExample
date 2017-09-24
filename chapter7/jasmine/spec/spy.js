/**
 * Created by likai on 17/3/11.
 */

var foo = require("../src/exp1.js");
describe("A spy, when configured to fake a series of return values", function() {
    beforeEach(function() {
        spyOn(foo,"getRequest")
    });

    it("tracks that the spy was called", function() {
        foo.getRequest("http://baidu.com");
        expect(foo.getRequest).toHaveBeenCalled();
    });

});