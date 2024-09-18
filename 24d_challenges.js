const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips'];
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers'];

let [chefsFishDishes, ...regularFishDishes] = fishDishes;
console.log(chefsFishDishes);
console.log(regularFishDishes);

let [regularMeatDishes, ...chefsMeatDishes] = meatDishes;
console.log(chefsMeatDishes);
console.log(regularMeatDishes);

console.log('--- final Results ---')
let chefsDishes = [chefsFishDishes, ...chefsMeatDishes]; // perlu di spread karna masih mengandung array
let regularDishes = [...regularFishDishes, regularMeatDishes]; // dispread jg karna mengandung array
console.log(chefsDishes);
console.log(regularDishes);

// course ga selesai. Keburu habis free trial github studennya 1 bulan