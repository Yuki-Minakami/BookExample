/**
 * Created by likai on 2017/5/9.
 */
function * Generator(){
    var result = yield Promise.resolve("Hello Node")
    console.log(result);
}

var gen = Generator()
var result = gen.next();
result.value.then(function(data){
    gen.next(data)
});



