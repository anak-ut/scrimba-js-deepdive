// mari kita menggunakan ternary hehehe
const isAuth = false;
let cartItems = 0;

// if stat
// if (isAuth) {
//     cartItems = 1;
// } else {
//     console.log('log in lu jingans !!')
// }

// ternary
isAuth ? cartItems = 1 : console.log('jingan kau');

// atau jika misal true-> cartItem =1, false-> cartItem=0
const cartItem = isAuth? 1 : 0; // efektif kalo opsi nilai
console.log(cartItem) // kalo opsi return actions, gbs

const umur = 20;
const hasilUmur = umur<10 ? 'gabisa bro' : 'gaskan cuy' ;
console.log(hasilUmur);
console.log('--- multiple  ternary ---');

const trafik = 'hijau';

const hasilTrafik = trafik === 'merah' ? 'merah ? STOP !' : trafik === 'hijau' ? 'gasskan coi' : 'bersiap sajah' ;
console.log(hasilTrafik);

// notes : meskipun conditional panjang bisa ditulis pake ternary
// tapi readibility nya jelek cog. jadi pake if statement saja kalo kepanjangan