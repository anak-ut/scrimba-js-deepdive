var price = 20 ; //global scope
var isSale = true ;

if (isSale){
   let price = 20 - 2; //block scope
    console.log(`sale is ${price}`)
}

console.log(`sale2 is ${price} `)
// var membuat price bisa diakses dari luar blok if
// padahal sale2 ingin akses price pada deklarasi di awal
// ganti var pada blok if ke const/ let