// maps hadir utk mengatasi masalah yang dimiliki object
// misal kita punya object dengan key berupa number
// object secara otomatis merubah key number tsb jadi string
const objekk = {
    1: 1,
    true: true
}

console.log(Object.keys(objekk));
// output : ['1', 'true'];
// di-implisit conv jadi string

// ES6 -> maps utk menambah fitur objek
// berkat maps, key bs jadi type apapun tidak harus string

// cara bikin map
// new Map([[key1,value1],[key2,value2]])
const mapBaru = new Map([
    [1,1],
    [true,true]
]);

console.log(mapBaru);

// nambah key value ke map

mapBaru.set('key','value'); // set utk nambah element
console.log(mapBaru);

// mari kita cek key nya apakah di map tetapi di konvert atau tidak
console.log([...mapBaru.keys()]);
// key tidak di konversi, tetap sesuai yang diinput
// output : [1,true,'key'];

// forEach for map
mapBaru.forEach((key,value) => {
    console.log(key,value);
});

// misal kita ingin membuat map dengan key nya adalah info user
// dan key nya adalah password

const user1 = { nama : 'kontoee'};
const user2 = { nama : 'kwontoeeee'};

// dan masing2 secret key(password)
const secretKey1 = 'dfdfedfdd';
const secretKey2 = 'hhfjdhfjdhfd';

// untuk menggabungkannya dengan cara dimasukkan ke dalam Map
const secretMap = new Map([
[user1, secretKey1],
[user2, secretKey2]
]);

// cara akses nilai map
// misal ingin lihat

const keys1 = secretMap.get(user1);
console.log(keys1);

// kita punya alternatif map yang punya fitur garbage collector
// penggunaan map dengan membesarnya objeks,akan memakan banyak memori
// adalah WeakMap
// cara pakai sama dengan new Map() -> new WeakMap();
// WeakMap hanya menerima objek as key
const SecretWeakMap = new WeakMap([
    [user1, secretKey1],
    [user2, secretKey2]
]);
const WeaKey = SecretWeakMap.get(user1);
console.log(`versi weaK : ${WeaKey}`);

// contoh lain :
/*
const user99 = {
name: 'johon',
verified: True
}
merubah objek di atas menjadi map
 */

const user99Map = new Map([
    ['name', 'johon'],
    ['verified', true]
])

console.log(user99Map);
console.log(user99Map.size);