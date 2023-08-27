INSTRUCTIONS

// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]

SOLUTIONS

function between(a, b) {
    const arro = new Array(b-a+1);
        for (let j = 0; j < arro.length; j++, a++) 
            {arro[j] = a;
            arro.push[j];
            }
            return arro;
}

// function between(a, b) {
//     arr = []
//     for(i = a;i <= b; i++){ 
//         arr.push(i)
//     }
//     return arr
// }

// function between(a, b) {
//     var all = [];
//     for(a;a<=b;a++){
//       all.push(a);
//     }
//     return all;
// }