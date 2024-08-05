// primitive types :

// string, number, boolean, undefined, null, symbol
// everything else above - object type

let message = 'message';
console.log(typeof message); // output : string
console.log(typeof 12); // output : number
console.log(typeof true); // output : boolean
console.log(typeof globalThis); // output : object
console.log(Boolean('haha')); // output: true

// saatnya convert data type to another
// - eksplisit type conversion (kita yang ubah nyuruh JS coy) :
// - implisit type conversion( JS does it automatic)/ coercion :

console.log(typeof(String(12))); // number to string < eksplisit>
console.log('1' + 1); // coercion
console.log('1' * '9'); //coercion
console.log('1' * 9); //coercion
console.log(9 * '6'); //coercion
console.log(9 * true); // coercion
console.log(99 * false); //coercion

// falsy --> false, 0, '', null, undefined, NaN

if (true) {
    console.log('truthy')
} else {
    console.log('falsy')
}

// tips : jangan lakukan direct comparison di if statement
const userName = '';
if (!userName){
    console.log('no user found');
}

// use triple equals === strict data type

// convert to real boolean if needed --> Boolean()

console.log('--- challenges ---');
/* chalenges 1:
- true
- false
- (true)
- false
- false
 */

/* challenges 2:
- false
- true
- false
- true
- true
 */

/* -- challenges 3:
' ', 0, undefined, NaN, null, false
 */