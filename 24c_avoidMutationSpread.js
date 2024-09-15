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