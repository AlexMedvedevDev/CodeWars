INSTRUCTIONS

// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust)

SOLUTIONS

function sumOfDifferences(arr) {
    if (arr.length <= 1) {
          return 0;
      } else {
          return Math.abs(Math.min(...arr) - Math.max(...arr));
      }
}

// const sumOfDifferences = arr => arr
//   .sort((a, b) => b - a)
//   .map((a, i) => a - arr[i + 1] || 0)
//   .reduce((a, b) => a + b, 0);

// function sumOfDifferences(arr) {
//     arr.sort((a, b) => a - b);
//     let b = 0;
//     for(let a = arr.length - 1; a > 0; a--) {
//       b += arr[a] - arr[a - 1];
//     }
//     return b;
// }