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
// notes Map([[key1,value1],[key2,value2]])
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

