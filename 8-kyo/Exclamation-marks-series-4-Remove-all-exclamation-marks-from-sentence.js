INSTRUCTIONS

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. 
// For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

SOLUTIONS

function remove (string) {
    let str = string.replaceAll('!',"");
    return str + '!';  
}

// const remove = s => s.replace(/!+/g, "")+"!";

// const remove = s => `${s.replace(/!/g,'')}!`