INSTRUCTIONS
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

SOLUTIONS

function include(arr, item){
    return arr.includes(item);
}

// function include(arr, item) {
//     return arr.indexOf(item) !== -1;
// }

// function include(arr, item){
//     return arr.filter(x => x === item).length >= 1
// }