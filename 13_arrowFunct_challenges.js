//  challenge 1

// function splitBill(amount, numPeople){
//     return `each person pay ${amount / numPeople}`;
// }

let splitBill = (amount, numPeople)=> `each person pays ${amount/numPeople}`

console.log(splitBill(10,2));
console.log(splitBill(10,4));
console.log(splitBill(10,5));

console.log(' --- --- ---');

// challenge 2

function countdown(startingNumber, step){
    let countFromNum = startingNumber + step;
    return function decrease(){
        countFromNum -= step;
        return countFromNum;
    }
}

let counting = countdown(20,2);
console.log(counting());
console.log(counting());
console.log(counting());