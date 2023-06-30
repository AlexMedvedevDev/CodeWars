INSTRUCTIONS
// nput: Array of elements
// ["h","o","l","a"]
// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"

SOLUTIONS

function printArray(array){
    return array.join(',');
}

// function printArray(array){
//     return array.join();
// }

// function printArray(array){
//     return array.toString();
// }

// function printArray(array){
//     var result = '';
//     array.forEach((el, index) => {
//       result += (index + 1 !== array.length) ? el + ',' : el;
//     });
//     return result;
// }
