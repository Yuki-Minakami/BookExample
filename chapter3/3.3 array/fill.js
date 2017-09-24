/**
 * Created by likai on 2017/5/20.
 */
var a = new Array(5);
console.log(a);//[ , , , ,  ]
a.fill(0);
console.log(a);//[ 0, 0, 0, 0, 0 ]


// ES5
var arr3 = Array.apply(null, new Array(5))
    .map(function () { return 0 });
// [ 0, 0, 0, 0, 0 ]

// ES6
const arr4 = new Array(2).fill(0);
// [ 0, 0, 0, 0, 0 ]

