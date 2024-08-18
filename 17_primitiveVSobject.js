// objek adalah koleksi dari primitives
// ada 6 primitive types :
// undefined, null, boolean, number,string, symbol

// primitive passed by value
// variabel yang beda, jika valuenya sama maka ketika dicompare hasilnya true
let value1 = 12;
let value2 = 12;
console.log(value1 === value2); //true

// tidak dengan objek
// objek passed by reference(pointer)
// pointer : lokasi tertentu di memory

let value3 = {};
let value4 = {};
console.log(value3 === value4); //false
let value5 = value3;
value5.a = 1;
console.log(value5 === value3); //true
console.log('value5 :', value5);
console.log('value3 :', value3);
value3.x = 'hayya';
console.log(value5 === value3); //true
console.log('value5 :', value5);
console.log('value3 :', value3);
// value5 copy reference value3
// jadi apabila dirubah value5, akan pengaruh jg ke value3
// sifat objek ini keren tp kita tidak ingin menggunakannya.

// cara memodif objek
// nb : objek keys adalah string

const colors = {
    blue: 'f00',
    orange: '#f60'
}

// add red colors
colors.red = '#f00'; // cara 1
colors.abu = '#001';
colors['pink'] = '#123' // cara 2
colors['coklat'] = '#heh'

console.log(colors);
console.log(colors.blue); // accept key
console.log(colors['blue']); // accept string

// hapus value key

delete colors.abu;
delete colors['red'];
console.log(colors);

function getColor(key){
    return colors[key]; // pakai bracket karna bersifat dinamis
}

console.log(getColor('orange'));