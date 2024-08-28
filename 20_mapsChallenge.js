const favPlace = new Map([
    ['music', 'jaz'],
    ['nama', 'paris house'],
    ['alamat', 'brighton'],
    ['visited', true]
]);
console.log(favPlace);
favPlace.set('averageBill', 12000);
console.log(favPlace);

console.log(favPlace.get('visited'));