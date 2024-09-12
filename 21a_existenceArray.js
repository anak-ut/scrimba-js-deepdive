const temps = [69,82,73,64];
// ngecek indeks ke berapa suatu elemen

console.log(temps.indexOf(82)); // output: 1
console.log(temps.indexOf(12)); // output: -1 ( not exist)
// ada cara lain mengecek keberadaan suatu value pada element
// di array tanpa mencantumkan informasi indeks nya
// menggunakan method include

console.log(temps.includes(100)); // false / 100 tidak exist
// includes hanya bisa bekerja di array yg primitive values
// seperti : string, number, boolean

// misal kita ada arrays berisi objeks
// pengganti includes() -> some()
// pakai some() + callback
const tempes = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: true }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

const hasil = tempes.some((tempp)=>{
   return tempp.isRecordTemp === true;
})

console.log(hasil);