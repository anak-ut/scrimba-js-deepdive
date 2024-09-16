const lunchMenu = ['harvest salad', 'southern fried chicken'];
const allMenu = lunchMenu ; // initial referensi value saja , bukan value nya
// sehingga jika berubah allMenu akan ngubah lunchMenu
allMenu.push('afrika nasgor');
console.log(lunchMenu);
console.log(allMenu);
// kedua array berubah sama sama ketika di push();

// cara -1 adalah di spread dulu baru di push;
const menuKu = [...lunchMenu]
menuKu.push('soto gelak tawa', 'sambal anekdot');
console.log(menuKu);
console.log(lunchMenu);
// perubahan menuKu tidak mutate lunchMenu

// cara -2 pakai concat. non mutating array method
const menuMantap = lunchMenu.concat('trasi negro');
console.log(menuMantap);
console.log(lunchMenu);
// pake concat, perubahan di menuMantap tidak ubah lunchMenu

// -------------------------------------
// kegunaan Spread yang advanced

const breakfast = ['bubur sambal matah'];
const dinner = ['salmon asam pedas', 'gulai jawa','burger pisang kocok'];
const menuBaru = ['rujak kampank', 'ayam khas wonosobo']

// nb : pop(),(push() dan unshift() method adalah bersifat mutating array
// kita akan menggabung menu2 diatas ke dalam newMenu
const newMenu = [...breakfast,...menuBaru,...dinner];
console.log(newMenu);
// atau kita bisa menambahkan ke array yang sudah ada
const menuPadang = [...breakfast,'nasi padang mbahrekso']
console.log(menuPadang); // merge array sesuai urutan

// contoh lain kombinasi dengan slice() untuk seolah olah hapus array tertentu
// ditambah kombinasi findIndex()
// slice() non mutating
const angkaGenap = [1,6,8,12,18,44];
const vokal = ['a','e','o'];

const cobaSlice = angkaGenap.slice(1,4)
console.log(cobaSlice); // slice(start array ke-1, stop sebelum array ke-4)
console.log(angkaGenap); // mantab. slice bersifat non mutating

// msialkan kita ingin ganti e --> i
// kita cari dulu indeks e berapa secara otomatis(no manual)
const indexE = vokal.findIndex(vok=>vok==='e');
console.log(indexE);
// kita pecah indeks sblm indexE, + 'i', lalu dimerge setelah indexE
const newVokal = [...vokal.slice(0,indexE),'i', ...vokal.slice(indexE+1)];
console.log(newVokal);