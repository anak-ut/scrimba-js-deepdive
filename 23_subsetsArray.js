const restaurants = [
    { name: 'Cap City Diner', milesAway: 2.2 },
    { name: 'Chop Shop', milesAway: 4.1 },
    { name: 'Northstar Cafe', milesAway: 0.9 },
    { name: 'City Tavern', milesAway: 0.5 },
    { name: 'Shake Shack', milesAway: 5.3 }
]

// map method hanya cek existance. kita ingin cek isinya
// filter method digunakan utk searching sesuatu di array
// menggunakan filter method


const result1 = restaurants.filter(restaurant =>restaurant.name.startsWith('C'))
console.log(result1); // tidak merubah(mutate) array original 
// filter diatas combine dg string method startswith utk cari name diawali c

// output
/*
[
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'City Tavern', milesAway: 0.5 }
]
*/

//kita coba cari z di nama restoran
const cariZ = restaurants.filter(restoran=>restoran.name.startsWith('z'))
console.log(cariZ);
// output [] alias array kosong

console.log(restaurants); // array original gak terganggu

// misalkan kita ingin cari restoran dengan nama awal C dan jarak < 3
const startCand3Miles = restaurants.filter(restos=>
    restos.name.startsWith('C') && restos.milesAway <3 // pakai short-circuit
)
console.log(startCand3Miles);
// output :
/*
[
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'City Tavern', milesAway: 0.5 }
]
*/