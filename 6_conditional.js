// if statement - evaluate boolean

const colorTrafik = 'abang';

if (colorTrafik==='ijo'){
    console.log(`maju maju maju - ${colorTrafik}`)
} else if (colorTrafik === 'abang'){
    console.log(`mandek rekk - ${colorTrafik}`);
} else {
    console.log(`siap siap - ${colorTrafik}`)
}

// switch statement - alternatif if statement

const jenisKelamin = 'lgbt';

switch (jenisKelamin){
    case 'laki':
        console.log(`${jenisKelamin} diperbolehkan daftar`);
        break;
    case 'perempuan':
        console.log(`${jenisKelamin} boleh mengikuti pendaftaran juga`);
        break;
    default:
        console.log(`tobat aja dulu woi ${jenisKelamin}`);
}

// ini adalah wilayah challengess
console.log('--- challenges ---');

const time = 'morning';

// if (time == 'morning'){
//     console.log(`halo good ${time}`);
// } else if (time == 'afternoon'){
//     console.log(`good ${time}`);
// } else if (time == 'evening'){
//     console.log(`howdy good ${time}`);
// } else {
//     console.log(`wtf good ${time}`);
// }

// in switch style

switch (time){
    case 'morning':
        console.log(`assalamualaikum ${time}`);
        break;
    case 'afternoon':
        console.log(`mantappp sudah ${time} yaa`);
        break;
    case 'evening':
        console.log(`happy good ${time}`);
        break;
    default:
        console.log(`anyway gooooooooood ${time}`);
}