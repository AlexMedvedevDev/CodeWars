INSTRUCTIONS
/*
Create a method to see whether the string is ALL CAPS.
Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
*/

SOLUTIONS
String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase();
}

// String.prototype.isUpperCase=function() {return this==this.toUpperCase()}

// String.prototype.isUpperCase = function () {
//     return !/[a-z]/.test(this);
// };