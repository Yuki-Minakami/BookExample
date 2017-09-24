//'use strict';

//require('babel-polyfill');

function timeout(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(1000).then(function (value) {
    console.log(value);
});