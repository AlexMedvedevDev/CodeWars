INSTRUCTIONS

// ask: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

SOLUTIONS

duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;

// function duckDuckGoose(players, goose) {
//     return players[(goose-1)%players.length].name
// }

// function duckDuckGoose(players, goose) {
//     let circle = goose;
//     while(players.length < circle) {
//       circle -= players.length
//     }
//     return players[circle - 1 ].name
// }