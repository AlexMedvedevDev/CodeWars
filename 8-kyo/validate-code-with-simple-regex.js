INSTRUCTIONS

// Basic regex tasks. Write a function that takes in a numeric code of any length. 
// The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
// You can assume the input will always be a number.

SOLUTIONS

function validateCode (code) {
    return /^[1-3]/.test(code);
}

// const validateCode = code => /^[1-3]/g.test(code);

// function validateCode(code) {
//     return +(code + '')[0] < 4
// }

// const validateCode = (c) => /^[123]/.test(c.toString());