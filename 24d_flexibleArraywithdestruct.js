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
const [menu1,menu2,menu3] = finalItems;
console.log(menu1,menu2,menu3);

// kita cetak destrukturing diatas jadi objek
console.log({menu1}, {menu2}, {menu3}); // nama var destruct sbg key