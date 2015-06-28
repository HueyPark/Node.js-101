function add (x) {
    return function (y) {
        return x + y;
    };
}

var addFunction = add(5);
console.log(addFunction(3));