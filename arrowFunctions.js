var normalFunction = function() { return "normal function." };
var arrowFunction = () => { return "arrow function"; };
var simpleArrowFunction = () => "simple arrow function";
var emptyArrowFunction = () => { };
var objectReturnFunction = () => ({a: 2});
var parameterFunction = (a,b) => a * b;
var singleParameterFunction = x => x * x;
var restParameterFunction = (a, b, ...rest) => {
    console.log(a);
    console.log(b);
    console.log(rest);
};

console.log(normalFunction());
console.log(arrowFunction());
console.log(simpleArrowFunction());
emptyArrowFunction();
console.log(objectReturnFunction());
console.log(parameterFunction(2,5));
console.log(singleParameterFunction(5));
restParameterFunction(3,6,45,67,209);

var originalArray = [1,2,3,4];
var mappedArray = originalArray.map((value) => value * value);

console.log(originalArray);
console.log(mappedArray);