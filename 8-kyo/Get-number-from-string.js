INSTRUCTIONS

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

SOLUTIONS

const getNumberFromString = (s) => {
    let newS = (s.split(' ')).join('');
    let str = '';
    for(let i = 0; i < newS.length; i++) {
      if(Number(newS[i]) * 0 === 0) {
        str += newS[i];
      }
    }
    return Number(str);
}

// function getNumberFromString(s) {
//     return +s.replace(/\D/g, "");
// }

// function getNumberFromString(s) {
//     return Number(s.replace(/\D/g, ""));
// }

// function getNumberFromString(s) {
//     return parseInt(s.replace(/[^\d]+/g, ""), 10)
// }