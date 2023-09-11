INSTRUCTIONS

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// Return as a number.

SOLUTIONS

function divCon(x){
    let int = 0;
    let str = 0;
    for(let i = 0; i < x.length; i++) {
      if (typeof x[i] == "number") {
        int += x[i];
      } else {
        str += Number(x[i]);
      }
    }
    return int - str;
}

// function divCon(x){
//     return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
// }

// var divCon = ($) => $.filter( el => typeof el === 'number').reduce((a, b)=> a+b, 0) - $.filter( el => typeof el === 'string').reduce((a, b)=> +a + +b, 0)