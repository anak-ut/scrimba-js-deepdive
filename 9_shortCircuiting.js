// short-circuiting
// first we use or ||

const response = 'Groot';



// versi pake ternary ;

// const hasil = response ? response : 'guest';
// console.log(hasil);

// versi short-circuit

const hasilShortCirc = response || 'guest' ;
console.log(hasilShortCirc);

// we can make short-circuit for longer statement

console.log('-- contoh short-circuit panjang');

const nama = 'jotot';
const isVerified = true;



// in if statement :
/*

let username;
if (nama){
    if (isVerified){
        username = nama;
    }
} else {
    username = 'tamu bajingan';
}
*/


// in short-circuit :
const username = isVerified && nama || 'guest bajingan';
console.log(username);

// nb : short-circuit mungkin lebih pendek tetapi
// if statement lebih enak dibaca logikanya
// short-circuiting punya urutan prioritas dijalankan
// () adalah order utama, lalu &&, dan terakhir ||