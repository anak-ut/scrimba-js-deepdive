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

// contoh lain :
function getData(baseurl, route){
    fetch(`${baseurl}${route}`)
    .then(response => response.json())
    .then(data => console.log(data));
}