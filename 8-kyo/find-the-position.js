INSTRUCTIONS
// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"

SOLUTIONS
function position(letter) {
    return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}

// function position(alphabet){
//     var letters = [" ", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//     var placed = letters.indexOf(alphabet)
//     return "Position of alphabet:" + " " + placed;
    
// }

// function position(l){
//     var lett = ' abcdefghijklmnopqrstuvwxyz'
//     return 'Position of alphabet: ' + [...lett].indexOf(l);
// }