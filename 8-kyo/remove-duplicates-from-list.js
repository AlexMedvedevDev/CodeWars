INSTRUCTIONS
// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

SOLUTIONS
function distinct(a) {
    let unique = [...new Set(a)];
    return unique;
}

function distinct(arr) {
    let res = []; 
    
    for(let i = 0; i < arr.length; i++){
      if(!res.includes(arr[i])){
        res.push(arr[i]);
      }
  }
  return res;
}

const distinct = a => a.filter((item, index) => a.indexOf(item) === index);