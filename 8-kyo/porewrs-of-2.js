INSTRUCTIONS
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

SOLUTIONS

function powersOfTwo(n){
    let results = new Array();
    let i = 0;
    do {
      results.push(Math.pow(2, i));
      i++;
    } while(i <= n);
  
    return results;
}

// function powersOfTwo(n){
//     var result = [];
//     for (var i = 0; i <= n; i++) {
//       result.push(Math.pow(2, i));
//     }
//     return result;
// }

// function powersOfTwo(n) {
//     return [...Array(n + 1)].map((_, i) => 2 ** i)
// }