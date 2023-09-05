INSTRUCTIONS

// Your code will show Full name of the neighbor and the truncated version of the name as an array. 
// If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

SOLUTIONS

function whoIsPaying(name){
    return name.length <= 2 ? [name] : [name, name.slice(0,2)];
}

// const whoIsPaying = name =>
//       [...new Set([name, name.slice(0, 2)])];

// function whoIsPaying(name){
//     let arr = [name];
//     if ( name.length > 2 ) arr.push(name.slice(0, 2));
//     return arr;
// }