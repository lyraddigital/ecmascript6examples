var firstName = 'Daryl';
var surname = 'Duckmanton';
var age = 25;

var personRecordOld = { 'firstName': firstName, 'surname': surname, 'age': age };
var personRecordNew = { firstName, surname, age };

console.log(personRecordOld);
console.log(personRecordNew);

var sizeOne = 16;
var sizeTwo = 32;
var sizeThree = 64;

var printNumbers = function() { console.log('1, 2, 3')};

var imageStatistics = {
    [sizeOne + 'bitImage']: sizeOne + 'bitImage.png',
    [sizeTwo + 'bitImage']: sizeTwo + 'bitImage.png',
    [sizeThree + 'bitImage']: sizeThree + 'bitImage.png',
    ['printIt']: printNumbers
};

console.log(imageStatistics);

imageStatistics.printIt();
imageStatistics['printIt']();