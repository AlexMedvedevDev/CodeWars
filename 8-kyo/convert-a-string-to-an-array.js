INSTRUCTIONS
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

SOLUTIONS

function stringToArray(string){
    return Array.from(string.split(" "));
}

// function stringToArray(string){
//     return string.split(' ');
// }