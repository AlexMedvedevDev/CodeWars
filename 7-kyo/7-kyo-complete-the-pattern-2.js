// Task:
// You have to write a function pattern which returns the following Pattern
// (See Pattern & Examples) upto n number of rows.

// Note: Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
//Solutions:
// function pattern(n){
//     var output="";
//     var number="";
//     while (n > 0) {
//       number = number + n;
//       output = number + (output ? "\n" : "") + output;
//       n--;
//     }
//     return output;
// }

// const pattern=(n,s='')=>Array.from({length:n},_=>s=s+n--).reverse().join`\n`;

function pattern(n) {
  let m = '';
  return Array.from({ length: n }, () => (m = m + n--))
    .reverse()
    .join('\n');
}
