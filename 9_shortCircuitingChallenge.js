// challenges 1
console.log('challenges 1');
const karma = 143;
const isMod = true;

let hasEnoughKarma = karma >=100 ?  true : false ;
let canUpvote = hasEnoughKarma && isMod || 'no' ;

// let canUpvote = isMod || hasEnoughKarma; (versi scrimba mentor)

console.log(`canUpVote : ${canUpvote}`);

console.log('- - - - - - - - -')
// challenges 2
console.log('challenges 2');
let canDelete = hasEnoughKarma && isMod || 'not allowed' ;
// let canDelete = hasEnoughKarma && isMod; (versi scrima mentor)
console.log(`canDelete : ${canDelete}`);

console.log('- - - - - - - - -')

// challenges 3
console.log('challenges 3');
const respon = '';
const hasValid = true ;
const pengguna = hasValid && (respon || 'guest');
console.log(`pengguna: ${pengguna}`);
// nb : pada &&, logic xpression stop lebih awal jika operan pertama falsy
// dan mengembalikan nilai pada operan pertama
// jika operan pertama truthy, hasilnya = operan ke-2

// contoh dari chatgpt :
console.log('-- contoh dari chatgpt ---');
const isLoggedIn1 = true;
const usr1 = isLoggedIn1 && { name1: 'Alice' };
console.log(usr1); // { name: 'Alice' }

const isLoggedIn2 = false;
const usr2 = isLoggedIn2 && { name2: 'Alice' };
console.log(usr2); // false
