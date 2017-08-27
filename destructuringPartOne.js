var coordinate = [10,50,20];
var [x,y,z] = coordinate;

console.log(x);
console.log(y);
console.log(z);

var simpleObj = {
    simpleName: 'Daryl',
    simpleAge: 21
};

var { simpleName, simpleAge } = simpleObj;

console.log(simpleName);
console.log(simpleAge);

var complexObj = {
    name: 'Daryl',
    age: 21,
    favouriteTeam: {
        name: 'Carlton'
    }
};


var { name: complexName, age: complexAge, favouriteTeam: { name: team } } = complexObj;

console.log(complexName);
console.log(complexAge);
console.log(team);