'use strict';
let firstName = 'reed'; // camelcase
let sureName = 'barger';
let number = 'one thousand';

console.log(`${firstName} , ${sureName} , ${number}`)

// --- better code dengan strict mode ---

// global object = object able to be accessed any where
// global object in browser --> window
// console.log(window);

// global object in server/nodejs --> global

// to globally preferenced (generally any env) to global object, just globalThis instead
// console.log(globalThis);


//message = 'hello';
let message = 'hellooo'
// console.log(message); // strict mode 'on', message harus di declare dg keyword

// ada 2 mode js berjalan, sloppy(normal) & strict mode
// letakkan :
// 'use strict'; di awal kode

// learn hoisting
//var warna;
console.log(warna);
// var warna; output: undefined we call it hosting
let warna; // output : referenceError
warna = 'kuning'