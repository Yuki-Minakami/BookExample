// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done');
//     });
// }
//
// timeout(1000).then((value) => {
//     console.log(value);
// });


var promise = new Promise((resolve, reject) => {
    console.log('begin');
    resolve();
});

setTimeout(() => {
    promise.then(() => {
        console.log('end');
    })
}, 5000);

