// more flexible data type than objects = easily manipulated
// mari kita bandingkan penggunaan object dan fleksibilitas array

const todos = {};
const todos1 = {
    text: 'wash the dishes',
    complete: false
};

const todos2 = {
    text: 'do laundry',
    complete: false
}

// kita tambah todos1, todos2 ke todos
// objekTarget[key] = value;
todos[1] = todos2;
todos[2] = todos1;

console.log(todos);

/*
output :
{
  dua: { text: 'do laundry', complete: false },
  satu: { text: 'wash the dishes', complete: false }
}
*/

// misalkan kita ingin hapus objek todos1
// kita perlu tau kuncinya berapa
// inilah kelemahan objek

// misalkan kita mw hapus todo2
// kita harus tau key= 1 dari todo2

delete todos[1] ;
console.log(todos);

// Sekarang kita akan menggunakan array

const toDo = [];

toDo[0] = todos1; // first index is 0
toDo[1] = todos2;
const rangetoDo = [toDo.length - 1];
console.log(rangetoDo);
// untuk menambahkan element, kita tidak harus memasukkan dengan nilai indeks arraynya
// kita bisa menggunakan methode push()
const todos3 = {
    text: ' makan nasi tok',
    complete: false
}

toDo.push(todos3);
console.log(toDo);

/*
output :
[
  { text: 'wash the dishes', complete: false },
  { text: 'do laundry', complete: false },
  { text: ' makan nasi tok', complete: false }
]
*/

// kesimpulan : kita bisa menambahkan elemen ke array dengan pakai indeks atau pakai push() method