
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

// contoh lain closure dari : https://medium.com/javascript-typescript-upgrade/mengenal-konsep-closure-pada-javascript-39a6e915b152

let outer = () => {
    let b= 10
    let inner = () => {
       let a = 20
       console.log(a+b)
    }

    return inner
 }
 console.log(outer()) // first executed
 console.log(outer()) // second executed

// contoh lain dari : https://medium.com/technology-hits/mastering-javascript-closures-your-essential-guide-d5fec4d52bf2

function outerFunc(){
    let outerVar = 'i am from the outer scope';
    function innerFunc(){
        console.log(outerVar);
    }
    return innerFunc;
}

const contohClosure = outerFunc();
console.log(contohClosure());
contohClosure();


// contoh lain lagi dari : https://blog.carlosrojas.dev/understanding-javascript-closures-how-they-work-and-when-to-use-them-6ec1e5cf5f12

function luar(){
    const messages = 'halo, ';

    function inner(nama){
        console.log(`${messages} ${nama}`)
    }

    return inner;
}

const greetingVal = luar();
greetingVal('asep kontol');

// closure are property of js funct
// call funct in different scope than were funct originally defined
// closure make variable keep and remember the value
// closure bisa dipake untuk encapsulation, atau membuat private var dan func

function createTimer(){
    let startTime = Date.now();

    function calculateNow(){
        console.log(`waktu tersisa: ${Date.now() - startTime}ms`);
    }
    return calculateNow;
}

const sisaWaktu = createTimer();
console.log(sisaWaktu());

// contoh closure untk generate func berdasarkan parameter

function greetGenerator(greeting){
    function namaGenerator(nama){
        console.log(`${greeting}, ${nama}`);
    }
    return namaGenerator;
}

let sayHello = greetGenerator('heloooo');
sayHello('jokontolodokk');

let sayHi = greetGenerator('hii');
sayHi('prabokontol');