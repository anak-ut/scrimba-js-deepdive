// objek digunakan utk memanage key value pairs
// pada kasus menulis function didalam objek, adalah behind the scene dari sebuah methods
// methods adalah fungsi didalam objek

/*

const obj = {
sayHi : function(){
    console.log('hi')
},
sayHolo : () => console.log('holo')
}

*/
// fungsi didalam objek pada ES6 bs ditulis lbh sederhana jadi
// dg hapus keyword function
const obj = {
    sayHi() {
        console.log('hi')
    }
}
obj.sayHi(); // output : hi

/*

contoh method yang umum dipakai

window.alert() atau biasa dipanggil alert()
 */
const blue = '#00f'

const colorPalette = {
    yellow: '#ff0',
    blue,
    orange: 'f60'
}

// value diambil dari const blue, maka tidak perlu value, ckup key saja.
console.log(colorPalette);
console.log(colorPalette.yellow, colorPalette.blue)