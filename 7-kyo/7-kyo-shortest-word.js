// Task.
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
//Solutions.

// function findShort(s){
//     let wordsArray = s.split(' ');
//     let wordsLength = wordsArray.map(word => word.length);
//     let minWordsLength = Math.min(...wordsLength);

//     return minWordsLength;
// }

// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
// }

function findShort(s) {
  return Math.min(...s.split(' ').map(s => s.length));
}
