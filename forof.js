var array = [1,2,3,4,5,6,7,8];

for(var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for(var number of array) {
    console.log(number);
}

var iterator = array[Symbol.iterator]();
var currentItem = iterator.next();

while(!currentItem.done) {
    console.log(currentItem.value);
    currentItem = iterator.next();
}

var myOwnIterator = {
    [Symbol.iterator]: function() {
        var currentValue = 1;

        return {
            next: function() {
                var isDone = currentValue > 10;
                var returnValue = currentValue;
                currentValue++;

                return { value: returnValue, done: isDone };
            }
        };
    }
};

for (var value of myOwnIterator) {
    console.log(value);
}