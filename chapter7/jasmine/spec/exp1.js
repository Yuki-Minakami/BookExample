/**
 * Created by likai on 17/3/8.
 */
require("jasmine");
describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

/*
* toEqual
* toBeGreaterThan
* toBeLessThan
* toContain
* toBeFalsy
* toBeTruthy
* toBeUndefined
* toBeDefined
* toBeNull
* toMatch
* toBe
* */

describe("A suite is just a function", function() {
    var a;

    it("and so is a spec", function() {
        a = true;

        expect(a).toBe(true);
    });
});




describe("A spy, when configured to fake a series of return values", function() {
    var foo, bar;

    beforeEach(function() {
        foo = {
            setBar: function(value) {
                bar = value;
            },
            getBar: function() {
                return bar;
            }
        };

        spyOn(foo, "getBar").and.returnValues("fetched first", "fetched second");

        foo.setBar(123);
    });

    it("tracks that the spy was called", function() {
        foo.getBar(123);
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not affect other functions", function() {
        expect(bar).toEqual(123);
    });

    it("when called multiple times returns the requested values in order", function() {
        expect(foo.getBar()).toEqual("fetched first");
        expect(foo.getBar()).toEqual("fetched second");
        expect(foo.getBar()).toBeUndefined();
    });
});