function printVariables(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

function printRestParameter(...values) {
    console.log(values);
}

var parameters = [1,2,3];

printVariables(parameters);
printVariables.apply(null, parameters);
printVariables(...parameters);

var arrayOne = [1,2,3];
var arrayTwo = [4,5,6];

var concatArray = [...arrayOne, ...arrayTwo];

console.log(concatArray);

printRestParameter(...concatArray);

var numbers = [4,5,8,2,3,5];
console.log(Math.max(...numbers));

var objectOne = { a: 'a', b: 'b' };
var arrayThatFails = [...objectOne];

console.log(arrayThatFails);