// primitive types :

// string, number, boolean, undefined, null, symbol
// everything else above - object type

let message = 'message';
console.log(typeof message); // output : string
console.log(typeof 12); // output : number
console.log(typeof true); // output : boolean
console.log(typeof globalThis); // output : object

// saatnya convert data type to another
// - eksplisit type conversion (kita yang ubah coy) :
// - implisit type conversion( JS does it automatic)/ coercion :

console.log(typeof(String(12))); // number to string < eksplisit>
