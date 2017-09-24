/**
 * Created by likai on 2017/4/21.
 */
console.log(new Buffer('hello, world!').toString('base64'));
// 转换成base64字符串：aGVsbG8sIHdvcmxkIQ==

console.log(new Buffer('aGVsbG8sIHdvcmxkIQ==', 'base64').toString());
// 还原base64字符串：hello, world!

console.log(new Buffer('hello, world!').toString('hex'));
// 转换成十六进制字符串：68656c6c6f2c20776f726c6421

console.log(new Buffer('68656c6c6f2c20776f726c6421', 'hex').toString());
// 还原十六进制字符串：hello, world!

