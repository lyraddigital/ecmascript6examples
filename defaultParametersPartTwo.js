var functionToEvaluate = new Function("a = 3", "b = 2", "return a === 3 && b === 2;");

console.log(functionToEvaluate(undefined, 2));

function multiplyValues(a, b = 1) {
    console.log(arguments.length);
    return a * b;
}

function deadZoneExample(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(multiplyValues(5,4));
console.log(multiplyValues(5));
deadZoneExample(undefined, undefined, 3);