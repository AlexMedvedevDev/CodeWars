INSTRUCTIONS
// Your task is to write function factorial.
// https://en.wikipedia.org/wiki/Factorial

SOLUTIONS

function factorial(n){
    if (n > 1) {
      return factorial(n-1) * n;
    } else {
      return 1
    }
}

// const factorial = n => n ? factorial(n - 1) * n : 1;

// function factorial(n){
//     let sum = 1;
//      for (let i = 1; i <= n; i++){
//        sum = sum * i;
//      }
//      return sum; 
// }