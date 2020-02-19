// Create the function prefill that returns an array of n elements
// that all have the same value v. See if you can do this without using a loop.

// You have to validate input:
// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// Code Examples
//     prefill(3,1) --> [1,1,1]

//     prefill(2,"abc") --> ['abc','abc']

//Solutions
const prefill = (size, value) => {
  if (size === 0) {
    return [];
  }
  const n = parseInt(size, 10);
  // parseInt The parseInt() function parses a string argument
  //and returns an integer of the specified radix (the base in mathematical numeral systems)
  //Syntax: parseInt(string [, radix])
  if (Number.isNaN(n) || (Number(size) === size && size % 1 !== 0) || n < 0) {
    throw new TypeError(`${size} is invalid`);
  }
  return new Array(n).fill(value);
};

//   function prefill(n, v) {
//     if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
//     return +n ? Array(n).fill(v) : [];
//   } //The Math.abs() function returns the absolute value of a number
