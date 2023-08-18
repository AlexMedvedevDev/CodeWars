INSTRUCTIONS

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays
// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]
// Invalid arrays
// [1, -9] is invalid because -9 is not a non-negative integer
// [1, 2, 33] is invalid because 33 is not a single-digit integer

SOLUTIONS

function upArray(arr){
    if (arr.length===0) return null;
    let carry=1;
    for (let i = arr.length-1; i >= 0; i--) {
      if (arr[i]>9 || arr[i]<0) return null;
      if (carry>0) {
        arr[i]+=carry;
        carry=Math.floor(arr[i]/10);
        arr[i]=arr[i]%10;
      }
    }
    if (carry>0) arr.unshift(carry);
    return arr;  
}

// function upArray(arr) {
//     if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
//         return null;
//     }
//     for (var i = 0; i < arr.length; i++) {
//         if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
//             return null;
//         }
//     }
//     // if its 9 and more than one digit we have to check all previous digits
//     // whether they are also a 9
//     for (var j = arr.length - 1; j > -1; j--) {
//         if (arr[j] !== 9) {
//             arr[j] = arr[j] + 1;
//             break;
//         } else {
//             arr[j] = 0;
//         }
//         if (j === 0) {
//             arr.unshift(1);
//         }
//     }
//     return arr;
// }

// function upArray(arr) {
//     if (arr.length == 0 || arr.some(e => e < 0 || e > 9)) return null
//     let i = arr.length - 1
//         while (i >= 0 && arr[i] == 9)
//       arr[i--] = 0
//     if (i < 0)
//       arr.unshift(1)
//     else
//       arr[i]++
//     return arr
// }