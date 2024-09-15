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
// misalkan kita ingin mendapatkan harga total saja dari menuItem
// jadi yang paling pas menggunakan reduce()

const totalPrice = menuItems.reduce((chart,item)=>{
    console.log(`chart ${chart}, item.price ${item.price}`);
    return chart + item.price
},0)
console.log(totalPrice);
