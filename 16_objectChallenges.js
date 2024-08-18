// challenges dari objeks
const bar = 'bar';
const cafe = 'cafe';
const restoran = 'restoran';
const favouritePlace = {
    bar,
    cafe,
    restoran,
    greeting(){
        console.log('haloo')
    }
}
favouritePlace.greeting();
console.log(favouritePlace.bar);