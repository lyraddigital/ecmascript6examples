this.nums = [1,2,3,4,5,6,7,8,9,10];
this.fives = [];
this.squares = [];

this.nums.forEach(function(v) {
    if(v % 5 === 0) {
        this.fives.push(v);
    }
}, this);

this.nums.forEach((value) => {
    this.squares.push(value * value);
});

console.log(this.fives);
console.log(this.squares);