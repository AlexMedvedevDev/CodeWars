INSTRUCTIONS
/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.
Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]
*/

SOLUTIONS
function reverseList(list) {
    return list.reverse();
}

// function reverseList(list) {
//     var array = [];
//     for (var i = list.length-1; i >= 0; i --){
//       array.push(list[i]);
//     }
//     return array;
// }

// function reverseList(list) {
//     let fin = []
//     for (let i = 0; i < list.length; i++) {
//       fin.push(list[list.length-i-1])
//     }
//     return fin
// }