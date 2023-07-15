INSTRUCTIONS
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1.
// The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

SOLUTIONS
var number=function(array){
    let res = [];
    for (let i= 0; i < array.length; i++){
         res.push(`${i+1}: ${array[i]}`);
      }
     return res;
}

// var number = function(array) {
//     return array.map(function (line, index) {
//       return (index + 1) + ": " + line;
//     });
// }