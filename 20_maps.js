// maps hadir utk mengatasi masalah yang dimiliki object
// misal kita punya object dengan key berupa number
// object secara otomatis merubah key number tsb jadi string
const objekk = {
    1: 1,
    true: true
}

console.log(Object.keys(objekk));
// output : ['1', 'true'];