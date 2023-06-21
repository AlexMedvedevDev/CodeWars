INSTRUCTIONS
// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. 
// Return the good values in the order they are given.

SOLUTIONS
function noOdds( values ){
    let res = [];
    for(let i of values){
      if(i % 2 == 0) {
        res.push(i);
      }
    }
    return res;
}

// var noOdds = values => values.filter(x => x % 2 === 0);

// function noOdds( values ){
//     var goodies = [];
//     for(var i=0; i<values.length;i++){
//         if(values[i]%2 == 0){
//           goodies.push(values[i]);
//         }
//     }
//     return goodies;
// }