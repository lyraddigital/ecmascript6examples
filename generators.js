function* simpleGenerator() {
    console.log('yielding number 1');
    yield 1;

    console.log('yielding number 2');
    yield 2;
}

function* myOwnIterator() {
    for(var i = 1; i <= 10; i++) {
        yield i;
    }
}

for(var value of simpleGenerator()) {
    console.log(`Processing value ${value}.`);
}

var iterator = simpleGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for(var value of myOwnIterator()) {
    console.log(`${value}`);
}