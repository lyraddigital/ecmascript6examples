function multiplyValues(a, b = 1) {
    return a * b;
}

function appendToArray(num, array = []) {
    array.push(num);
    return array;
}

function calculateAreaOfRectangle(width, height = width) {
    return width * height;
}

function helloWorld() {
    return "Hello World";
}

function printResult(printResultFunction = helloWorld) {
    console.log(printResultFunction());
}

console.log(multiplyValues(5,4));
console.log(multiplyValues(5));
console.log(multiplyValues(5, undefined));
console.log(appendToArray(3));
console.log(appendToArray(4));

var areaOfRectangle = calculateAreaOfRectangle(10, 4);
var areaOfSquare = calculateAreaOfRectangle(10);

console.log(areaOfRectangle);
console.log(areaOfSquare);

printResult(helloWorld);
printResult();