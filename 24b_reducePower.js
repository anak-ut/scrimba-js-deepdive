const numbers = [1,2,3,4,5,6]
// double numbers with the power of reduce
const tripleNum = numbers.reduce((akumulator, number)=>{
    akumulator.push(number *3) ; // number x 3 lalu dipush ke akumulator
    return akumulator;
},[]); // [] adalah nilai awal dari akumulator makanya number x3 dipush ke akumulator

console.log(tripleNum);
// cara reduce method diatas pada kasus 'x' ini punya kesamaan dg map method :
const dobelNum = numbers.map(num=> num*2);
console.log(dobelNum);
// bisa dikatakan map() method adalah shortcut dari reduce case diatas


// ----------------------------------------------


// misalkan kita mw buat kondisional pake reduce
// dari numbers akan diambil elemen > 3
const moreThan3 = numbers.reduce((accum, nomor)=>{
    if (nomor >3){
        accum.push(nomor);
    }
    return accum;
},[]);

console.log(moreThan3);

// ternyata reduce method diatas mirip dengan kemampuan filter method
const more3 = numbers.filter(nomber=>nomber>3);
console.log(more3);

