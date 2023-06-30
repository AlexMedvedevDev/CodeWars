INSTRUCTIONS
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

SOLUTIONS

var capitals = function (word) {
    let res = [];
    for (let i=0 ; i < word.length; i++) {
      if (word[i] == word[i].toUpperCase()) {
        res.push(i);
     }
    }
    return res;
};

// var capitals = function (word) {
// 	return word.split('')
//              .map(function(l, i) { if (l.toUpperCase() === l) return i; })
//              .filter(function(i) { return i != null })
// };

// var capitals = function (word) {
//     return word.split('').reduce(function(result, c, i) {
//       if (c.toUpperCase() === c) result.push(i);
//       return result;
//     }, []);
// };