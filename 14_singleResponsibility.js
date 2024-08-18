function handleLike(step){
    let likeCount = 0;
    return function addLike(){
        likeCount += step;
        return likeCount;
    }
}

// fungsi diatas disebut hi order function
// high order : fungsi yang dapat menerima fungsi lain sbg argumen
const dobeLike = handleLike(2);
console.log(dobeLike());
console.log(dobeLike());
console.log(dobeLike());


// --------------------------------------------------------
// contoh lain :
// fetching data from API
// fungsi dibawah sebelum ikut rules single responsibility func
/*

function getData(baseurl, route){
    fetch(`${baseurl}${route}`)
    .then(response => response.json())
    .then(data => console.log(data));
}

getData('https://jsonplaceholder.typicode.com', '/posts');
getData('https://jsonplaceholder.typicode.com', '/comments');
*/
// untuk menggunakan route post dan comment harus memanggil fungsi generik
// ada duplikasi dalam memanggil baseurl
// sebaiknya di jadikan single resp. func

// refactoring fungsi diatas

/*

function getData(baseurl){
    return function(route){
        fetch('${baseurl}${route}')
        .then(response => response.json())
        .then(data => console.log(data))
    }
}

// kita bungkus dulu fungsi getData ke dalam variabel utk kita gunakan memanggil inner fungsi funct(route)

const getSosmeData = getData('https://jsonplaceholder.typicode.com');
// memanggil inner fungsi route nya
getSosmeData('/comments');
getSosmeData('/posts');

*/
// bahkan fungsi diatas masih bisa dipisah/ dibuat single resp app
// dengan cara fungsi console.log-nya dianggap sbg callback.
// sehingga kita bs passing fungsi tsb menjadi tidak hanya sbg console.log, mungkin fungsi yg lain yg bs kita tentukan

// single resp jilid 2 wkwk

function getData(baseurl){
    function(route){
        fetch('${baseurl}${route}')
        .then(response => response.json())
        .then(data => console.log(data))
    }
}