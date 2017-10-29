/**
 * Created by likai on 17/2/22.
 */
function* Generator() {
    yield "Hello Node";
    return "end"
}

var gen = Generator();

function auto(Generator) {
    var gen = Generator();
    while (gen.next().value != undefined) {
        gen.next();
    }
}
// console.log(gen.next());//{ value: 'Hello Node', done: false }
// console.log(gen.next());//{ value: 'end', done: true }
// console.log(gen.next());//{ value: undefined, done: true }
//

