const temperaturs = [
    {degrees: 31, isRecordTemp: false},
    {degrees: 57, isRecordTemp: true},
    {degrees: 41, isRecordTemp: false},
    {degrees: 55, isRecordTemp: false}
];

const mapTemps = temperaturs.map(temp=>{
    // temp.isRecordTemp = true;
    return {...temp, isRecordTemp :true}; // deep copy pake spread
    // agar tidak mempengaruhi referens (temperaturs)
})
// console.log(temperaturs);
// console.log(mapTemps);

// mari kita tambah properti baru yaitu isHigh : true

const tempIsHi = temperaturs.map(temp1=>{
    return {...temp1, isHigh: true};
})

console.log(temperaturs);
// console.log(tempIsHi);

// merubah properti tertentu dg kondisi

const condTemp = temperaturs.map(temp2=>
    temp2.degrees > 54 ? {...temp2,isHigh: true} : {...temp2}
) // tidak perlu blok code {} jadi dihapus kurawalnya dan tidak pake
// return

console.log(condTemp);
// nb : ada beberapa kode yang masih pake return dan {} karena ada statement disana
// arrow funct bisa hapus {} dan return kalau hanya expression saja
// ternary tidak mencantumkan return karna ternary sendiri merupakan expression, bukan statement