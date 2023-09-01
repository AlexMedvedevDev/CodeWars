INSTRUCTIONS

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer

SOLUTIONS

function largestPairSum (numbers) {
    numbers.sort((a, b) => b - a);
    return numbers[0] + numbers[1];
}

// const largestPairSum = numbers => numbers.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a + b);

// function largestPairSum (numbers) {
//     let firstMax = Math.max.apply(null, numbers); // highest first integer
//     let removeFirstMax = numbers.splice(numbers.indexOf(firstMax), 1); // remove first max integer
//     let secondMax = Math.max.apply(null, numbers); // get the second highest integer
//     return firstMax + secondMax;
// }