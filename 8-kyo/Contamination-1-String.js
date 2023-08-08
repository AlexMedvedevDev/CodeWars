INSTRUCTIONS

// An AI has infected a text with a character!!
// This text is now fully mutated to this character.
// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!
// Note: The character is a string of length 1 or an empty string.
// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

SOLUTIONS

function contamination(text, char){
    let myStr = "";
    for(let i = 0; i < text.length;i++){
        myStr = myStr + char;
    }
    return myStr;
}

// function contamination(text, char){
//     return char.repeat(text.length)
// }

// function contamination(text, char){
//     return text.replace(/./g, char);
// }

// function contamination(text, char) {
//     return text.split("").fill(char).join("");
// }