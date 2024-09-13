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
console.log(temperaturs);
console.log(mapTemps);