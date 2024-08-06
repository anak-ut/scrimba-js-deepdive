function puts(teks){
    console.log(teks.toString());
}

let halooo = 'jancok asu kirik';
puts(halooo);
// function digunakan utk membuat fungsi agar bisa dipakai berulang

let greet = 'hi';
function ecoh(input){
    console.log(`${greet} , ${input}`)
}
let kontol = 'jambu kirikk'
ecoh(kontol);

function celuk(input,greetings){
    return `${greetings} bro ${input}`
}
console.log(celuk(42, 'janchok'))

function kali(a,b){
   return a*b; // tanpa return, hasil undefined
}

let hasilKali = kali(2,3)
console.log(hasilKali);