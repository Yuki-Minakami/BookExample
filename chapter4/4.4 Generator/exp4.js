/**
 * Created by likai on 17/2/24.
 */
function* Generator() {
    yield "Hello Node";
    yield "From Lear"
    yield "end"
}
var gen = Generator();
for(let i of gen){
    console.log(i);
}