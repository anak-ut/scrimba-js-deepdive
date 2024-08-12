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

console.log(`versi arrow func: ${kapital(username)}`)