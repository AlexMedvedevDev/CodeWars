//Discriptiom
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

// Examples
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND

//Solutions:
// function songDecoder(song){
//     return song.replace(/(?:WUB)*WUB/g,' ').replace(/^\s*(.*S)\s*$/, '$1').trim();
// }

function songDecoder(song) {
  return song.replace(/(WUB)+/g, ' ').trim();
}

//const songDecoder = song => song.replace(/(WUB)+/g, ' ').trim();
