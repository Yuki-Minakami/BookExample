function myIter(array){
    this.array =array;
}

myIter.prototype[Symbol.iterator] = function() {
    //var self = this;
    let index = 0;
    var next = ()=> {
        if (index < this.array.length) {
            return {
                value: this.array[index++],
                done: false
            };
        } else {
            return { value: undefined, done: true };
        }
    }
    return { next: next };
}

var myiter = new myIter(["a","b"])

for(var i of myiter){
    console.log(i);
}


let obj = {
    data: [ 'hello', 'world' ],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};
for (var i of obj){
    console.log(i);
}