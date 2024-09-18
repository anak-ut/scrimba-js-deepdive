const finalItems = [
    'sego jagung',
    'yam goreng mas slamet',
    'salmon mas kukuh'
];

// misal kita ingin memasukkan masing-masing elemen finalItems ke beberapa var
// cara konvensional
let item1 = finalItems[0];
let item2 = finalItems[1];
let item3 = finalItems[2];
console.log(item1,item2,item3);

// cara amazing dg destrukturing
let [menu1,menu2,menu3] = finalItems;
console.log(menu1,menu2,menu3);

// kita cetak destrukturing diatas jadi objek
console.log({menu1}, {menu2}, {menu3}); // nama var destruct sbg key

// coba kita swap menu1 = menu2
// tidak perlu declare nilai. karna kita mw swap saja
[menu2,menu1,menu3] = [menu1,menu2,menu3];
console.log({menu1},{menu2},{menu3});


// rest operator dan destructur main bersama

const warna = ['kuning', 'biru', 'abu-abu'];
// kita masukkan kuning sbg var golkar, sisanya lain lain
const [golkar, ...lainnya] = warna;
console.log(golkar);
console.log(lainnya);