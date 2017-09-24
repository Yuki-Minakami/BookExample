/**
 * Created by likai on 17/3/5.
 */
const assert = require('assert');

assert.equal(1, 1);
// OK, 1 == 1
assert.equal(1, '1');
// OK, 1 == '1'

//assert.equal(1, 2);
// AssertionError: 1 == 2
assert.throws(
    () => {
        throw new Error('Wrong value');
    },
    Error
);