function countdown(initialValue, step){
let detik = initialValue;
    function mundur(){
        detik -= step;
        return detik;
}
return mundur;
}

let countingDown = countdown(11,1);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());