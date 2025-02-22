import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray, multiplyMaxArrayValue } from './arrayModule.js';

console.log(`Add Variables: `, add(125, 5));
console.log(`Subtract Variables: `, subtract(97, 87));
console.log(`Multiply Variables: `, multiply(25, 4));

console.log('Convert String to UpperCase: ', toUpperCase('nour'));
console.log('Convert String to LowerCase: ', toLowerCase('GABE'));

console.log(`Maximum Array Value: `, findMax([21, 97, 61, 87, 29, 13]));
console.log('Reversed Array: ', reverseArray([87, 29, 13]));

addAndLogUpper(15, 30);
multiplyMaxArrayValue([5, 8, 44, 55, 6, 89]);