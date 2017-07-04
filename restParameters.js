function restParameterFunction(a, ...theRest) {
    //console.log(a);
    //console.log(b);
    //console.log(arguments[2]);
    console.log(theRest[0]);
    console.log(theRest[1]);
    console.log(theRest[2]);
}

var dynamicFunction = new Function("a", "b", "...theRest", "console.log(theRest[0])");

restParameterFunction(3,1,3,5);
dynamicFunction(1,3,5);

/*var someObject = {
    set name(...value) {
        console.log('Name is ' + value[0]);
    }
}

someObject.name = 'Daryl';*/

console.log(restParameterFunction.length);