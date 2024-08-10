function toFahrenheit(celcius,decimal = 1){
    let fahrenheit = celcius * 1.8 + 32;
    return Number(fahrenheit.toFixed(decimal));
}

let hasil = toFahrenheit(21,0);
console.log(hasil)