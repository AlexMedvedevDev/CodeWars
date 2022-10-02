INSTRUCTIONS
/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

SOLUTIONS
function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}

// const isPalindrome = (x) => {
//     return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
// }

// function isPalindrome(x) {
//     x = x.toLowerCase()
//     let a = 0
//     let b = x.length
//     while (a < b) {
//       if (x[a] != x[b-1])
//         return false
//       a++
//       b--
//     }
//     return true
// }