var firstName = 'Daryl';
var lastName = 'Duckmanton';

var helloMessageOld = 'Hello ' + firstName + ' ' + lastName;
var helloMessageNew = `Hello ${firstName} ${lastName}`;

var multilineMessageOld = '' +
'<p>\n' +
'   Hello ' + firstName + ' ' + lastName + '\n' +
'</p>';

var multilineMessageNew = 
`<p>
   Hello ${firstName} ${lastName}
</p>`;

console.log(helloMessageOld);
console.log(helloMessageNew);
console.log(multilineMessageOld);
console.log(multilineMessageNew);