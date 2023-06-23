INSTRUCTIONS
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

SOLUTIONS

function sumStr(a,b) {
    return (parseInt(+a)+parseInt(+b)).toString();
}

// function sumStr(a,b) {
//     return String(Number(a)+Number(b));
// }

// sumStr = (a,b) => String(+a + +b);

// function sumStr(a,b) {
//     const num1 = Number(a);
//     const num2 = Number(b);
//     return String(num1 + num2)
// }