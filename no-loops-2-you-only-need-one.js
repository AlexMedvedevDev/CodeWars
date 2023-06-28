INSTRUCTIONS
// *** No Loops Allowed ***
// You will be given an array a and a value x. 
// All you need to do is check whether the provided array contains the value, without using a loop.
// Array can contain numbers or strings. x can be either. 
// Return true if the array contains the value, false if not. 
// With strings you will need to account for case

SOLUTIONS

function check(a,x){
    return a.includes(x);
}

// check=(a,x)=>a.some(v=>v==x)

// function check(a,x) {
//     var arr = [];
//     var foundYa = a.filter(function(i) {
//       if(i === x) {
//         arr.push(x);
//       }
//     });
//     if(arr.length >= 1) {
//       return true;
//     } else {
//       return false;
//     }
// };

// function check(a,x){
//     let b = a.filter(el => el == x);
//     return b.length ? true : false;
// };

// const check = (a,x) => RegExp('\\b'+x+'\\b').test(a.join(','));