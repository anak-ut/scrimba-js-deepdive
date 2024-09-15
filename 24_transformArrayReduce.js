const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
]

// method sebelumnya seperti map() method mengembalikan array
// tetapi reduce() mengembalikan tipe value apapun.
/*
sintaks reduce :
namaArrays.reduce((akumulator, nama element)=>{},initialValue)

dalam hal diatas

menuItems.reduce((akumulator, item)=>{
    return akumulator + item.price;
    },0)

    // karena reduce kita ingin buat number value maka initial value kita buat 0
*/
// misalkan kita ingin mendapatkan harga total saja dari menuItem
// jadi yang paling pas menggunakan reduce()

const totalPrice = menuItems.reduce((chart,item)=>{
    console.log(`chart ${chart}, item.price ${item.price}`);
    return chart + item.price
},0)
console.log(totalPrice);
