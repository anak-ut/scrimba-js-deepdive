
function handleCounter(){
    let likeCounter = 0;
    return function addKonter(){
        likeCounter += 1;
        return likeCounter;
    }
    // addKonter();
   // console.log(likeCounter)
}

let hasil = handleCounter();
console.log(hasil())
console.log(hasil())
console.log(hasil())

// closure are property of js funct
// call funct in different scope than were funct originally defined
// closure make variable keep and remember the value