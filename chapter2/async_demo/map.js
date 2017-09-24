var async = require('async');

var t = require('./t');
var log = t.log;

/**
 * 对集合中的每一个元素，执行某个异步操作，得到结果。所有的结果将汇总到最终的callback里。与each的区别是，each只关心操作不管最后的值，而map关心的最后产生的值。
 *
 * 提供了两种方式：
 * 1. 并行执行。同时对集合中所有元素进行操作，结果汇总到最终callback里。如果出错，则立刻返回错误以及已经执行完的任务的结果，未执行完的占个空位
 * 2. 顺序执行。对集合中的元素一个一个执行操作，结果汇总到最终callback里。如果出错，则立刻返回错误以及已经执行完的结果，未执行的被忽略。
 */
// map(arr, iterator(item, callback), callback(err, results))

var arr = [{name:'Jack', delay:200}, {name:'Mike', delay: 100}, {name:'Freewind', delay:300}, {name:'Test', delay: 50}];

var arr = [1,2,3,4,5,6];

/**
 * 并行执行，同时最多2个函数并行，传给最终callback。
 */
//1.5

function test(item,callback){
    log('1.5 enter: ' + item);
    callback(null, item);

}

async.mapLimit(arr,2, test, function(err, results) {
   // console.log("这尼玛是啥");
    console.log(results);
    //log('1.5 err: ', err);
    //log('1.5 results: ', results);
});
//57.797> 1.5 enter: Jack
//57.800> 1.5 enter: Mike
//57.900> 1.5 handle: Mike
//57.900> 1.5 enter: Freewind
//58.008> 1.5 handle: Jack
//58.009> 1.5 err: myerr
//58.009> 1.5 results: [ undefined, 'Mike!!!' ]
//58.208> 1.5 handle: Freewind
//58.208> 1.5 enter: Test
//58.273> 1.5 handle: Test
