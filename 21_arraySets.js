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
todos[2] = todos2;
todos[1] = todos1;

console.log(todos);

// misalkan kita ingin hapus objek todos1
// kita perlu tau kuncinya berapa
// inilah kelemahan objek

