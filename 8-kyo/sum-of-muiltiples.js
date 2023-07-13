INSTRUCTIONS

// Find the sum of all multiples of n below m
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

SOLUTIONS
function sumMul(n, m){
    let res = 0;
    for(let i = 1; i*n<m; i++){
        res += i*n;
      }
      return res > 0 ? res : 'INVALID';
}

// function sumMul(n,m){
//     if (n <= 0 || m <= 0) return "INVALID";
    
//     const last = Math.ceil(m/n) * n - n;
//     return (last + n) * (last / n) / 2;
// }

// const sumMul = (n, m) =>
//   m > n ? [...Array(m / n ^ 0)].map((_, idx) => ++idx * n).reduce((pre, val) => pre + val * (val < m)) : `INVALID`;

//   const sumMul = (n, m) =>
//   m <= 0
//     ? "INVALID"
//     : Array.from({ length: m }).reduce(
//         (acc, _, index) => (index % n === 0 ? acc + index : acc),
//         0
//       );