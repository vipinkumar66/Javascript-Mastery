//******Numbers*********/

const ekNumber = 900;
// Here the type is of number
console.log(typeof ekNumber);

const dusraNumber = new Number(900);
// But here the type is object
console.log(dusraNumber); //=> [Number: 900]
console.log(typeof dusraNumber);

// The numbers has some functions those are:
const testNumber = 20000000;
console.log(testNumber.toLocaleString("en-IN")); // => 2,00,00,000 This converted the number to
// Indian local string

const precisionNumber = 123.5786;
console.log(precisionNumber.toPrecision(3)) //=>124
console.log(precisionNumber.toPrecision(4)) //=> 123.6

//*****Maths******** */

// The main one is the random here
console.log(Math.round(34.24543));
console.log(Math.floor(34.24543));
console.log(Math.ceil(34.24543));

max = 10
min = 20

console.log(Math.floor(Math.random() * (max-min +1) + min));

