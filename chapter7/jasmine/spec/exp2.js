/**
 * Created by likai on 17/3/11.
 */
describe("The 'toBe' matcher compares with ===", function() {
        it("and has a positive case", function() {
            expect(true).toBe(true);
        });
        it("and can have a negative case", function() {
            expect(false).not.toBe(true);
        });

        it("The 'toBe' matcher compares with ===", function() {
            var a = 12;
            var b = a;

            expect(a).toBe(b);
            expect(a).not.toBe(null);
        });

        it("works for simple literals and variables", function() {
            var a = 12;
            expect(a).toEqual(12);
        });
        it("The `toBeUndefined` matcher compares against `undefined`", function() {
            var a = {
                foo: "foo"
            };

            expect(a.foo).not.toBeUndefined();
            expect(a.bar).toBeUndefined();
        });

        it("The 'toBeNull' matcher compares against null", function() {
            var a = null;
            var foo = "foo";

            expect(null).toBeNull();
            expect(a).toBeNull();
            expect(foo).not.toBeNull();
        });

        it("works for finding an item in an Array", function() {
            var a = ["foo", "bar", "baz"];

            expect(a).toContain("bar");
            expect(a).not.toContain("quux");
        });

        it("also works for finding a substring", function() {
            var a = "foo bar baz";

            expect(a).toContain("bar");
            expect(a).not.toContain("quux");
        });

        it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
            var pi = 3.1415926,
                e = 2.78;

            expect(e).toBeLessThan(pi);
            expect(pi).not.toBeLessThan(e);
        });

});


describe("Included matchers:", function() {



    describe("The 'toEqual' matcher", function() {



        it("should work for objects", function() {
            var foo = {
                a: 12,
                b: 34
            };
            var bar = {
                a: 12,
                b: 34
            };
            expect(foo).toEqual(bar);
        });
    });

    it("The 'toMatch' matcher is for regular expressions", function() {
        var message = "foo bar baz";

        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", function() {
        var a = {
            foo: "foo"
        };

        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });



    it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
        var a, foo = "foo";

        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
        var a, foo = "foo";

        expect(a).toBeFalsy();
        expect(foo).not.toBeFalsy();
    });

    describe("The 'toContain' matcher", function() {
        it("works for finding an item in an Array", function() {
            var a = ["foo", "bar", "baz"];

            expect(a).toContain("bar");
            expect(a).not.toContain("quux");
        });

        it("also works for finding a substring", function() {
            var a = "foo bar baz";

            expect(a).toContain("bar");
            expect(a).not.toContain("quux");
        });
    });

    it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
        var pi = 3.1415926,
            e = 2.78;

        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);
    });

    it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
        var pi = 3.1415926,
            e = 2.78;

        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);
    });

    it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
        var pi = 3.1415926,
            e = 2.78;

        expect(pi).not.toBeCloseTo(e, 2);
        expect(pi).toBeCloseTo(e, 0);
    });

    it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
        var foo = function() {
            return 1 + 2;
        };
        var bar = function() {
            return a + 1;
        };
        var baz = function() {
            throw 'what';
        };

        expect(foo).not.toThrow();
        expect(bar).toThrow();
        expect(baz).toThrow('what');
    });

    it("The 'toThrowError' matcher is for testing a specific thrown exception", function() {
        var foo = function() {
            throw new TypeError("foo bar baz");
        };

        expect(foo).toThrowError("foo bar baz");
        expect(foo).toThrowError(/bar/);
        expect(foo).toThrowError(TypeError);
        expect(foo).toThrowError(TypeError, "foo bar baz");
    });
});