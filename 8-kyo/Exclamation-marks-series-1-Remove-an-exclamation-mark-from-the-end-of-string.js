INSTRUCTIONS

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

SOLUTIONS

function remove (string) {
    return string.replace(/!$/, '');
}

// function remove(s) {
//     return s.endsWith('!') ? s.slice(0, -1) : s;
// }

// function remove(s){
//     return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
// }