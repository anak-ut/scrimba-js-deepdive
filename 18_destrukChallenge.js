const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: {
        traditional: 'Fiddler\'s Elbow',
        jazz: 'The Paris House'
    }
}

const {beer, coffee, music} = recommendations;
const {traditional, jazz} = recommendations.music;

function suggestRecom(){
    console.log(music);
    console.log(`tradition: ${traditional} | jazz: ${jazz}`);
}

suggestRecom();
