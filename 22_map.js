const temperaturs = [
    {degrees: 31, isRecordTemp: false},
    {degrees: 57, isRecordTemp: true},
    {degrees: 41, isRecordTemp: false},
    {degrees: 55, isRecordTemp: false}
];

// kita misalnya akan perbaiki beberapa element
// menggunakan .map()
// kita akan set isRecordTemp semuanya ke true;
// pakai .map() akan buat array baru
// tidak akan mengganggu aray lama

const newTemps = temperaturs.map(temp =>{
    temp.isRecordTemp = true;
    return temp;
})
// console.log(newTemps); // output semua isRecordTemp = true

// mari kita tambah properti baru di array

const newPropsTemps = temperaturs.map((temp)=>{
    temp.isHigh = true;
    return temp;
});
// console.log(newPropsTemps);

// kita set conditional

const newCond = temperaturs.map(temp=>
    temp.degrees > 56 ? {...temp,isHigh: true } : temp
);

console.log(newCond);