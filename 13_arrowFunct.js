// shorten function

// arrow function is created for reasons:
// - shorter syntax to write function
// - working with classes & object easier

// fungsi biasa
const username = 'john';

function capitalizeName(name){
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}

console.log(`versi fungsi biasa: ${capitalizeName(username)}`)

// --- --- --- --- ---

// kita tulis ulang fungsi diatas dg arrow

const kapital = (nama) => `${nama.charAt(0).toUpperCase()}${nama.slice(1)}`
    // hapus keyword function dan nama fungsi.
    // setelah parameter, kasih ' => '
    // arrow func punya implicit return. jadi curly braces dan return bs dihapus

console.log(`versi arrow func: ${kapital(username)}`);

// mari kita per-rumit dengan bermain callback sederhana
// sbg catatan, fungsi bisa digunakan seperti value/ parameter (disebut callback)

// kita ingin buat fungsi greetUser dengan nyomot fungsi kapital juga

// buat fungsi greet dg fungsi biasa

function greetingUser(nama,callback){ // fungsi callback
    return callback(kapital(nama));
}

const hasil = greetingUser(username, (name)=> `hasil callback : hi there, ${name}`);

console.log(hasil);
const hasil2 = greetingUser('joko',(nama)=> console.log(nama));
console.log(hasil2)

// tambahan:
// callback adalah fungsi yang akan dijadikan nilai/parameter pada fungsi lain(fungsi utama)
// fungsi utama : menerima callback
// kode pada javascript normalnya dijalankan secara sinkronus
// dijalankan dari atas kebawah ( baris per baris);
// jika ada salah satu kode saja yang tersendat, akan menyebabkan blocking.
// jika error, makan kode dihentikan paksa, padahal kode dibawahnya belum selesai
// maka dari itu digunakan asynch callback agar kode dijalankan terus sembari menunggu kode yang berjalan lama
// dieksekusi

// contoh async
function mainFunction() {
    console.log("Mulai");

    setTimeout(function callback() {
        console.log("Callback dieksekusi");
    }, 3000);

    console.log("Akhir");
}

mainFunction();
/* output :
Mulai
Akhir
callback dieksekusi
*/
