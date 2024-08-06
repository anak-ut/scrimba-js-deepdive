function splitBill(bill,nPeoples){
    return `tiap orang bayar: ${Math.floor(bill/nPeoples)}`;
}

console.log(splitBill(10, 2))
console.log(splitBill(16, 4))
console.log(splitBill(350, 9))