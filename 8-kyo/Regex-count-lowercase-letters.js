INSTRUCTIONS

// Your task is simply to count the total number of lowercase letters in a string.
// Examples
// "abc" ===> 3
// "abcABC123" ===> 3
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
// "" ===> 0;
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
// "abcdefghijklmnopqrstuvwxyz" ===> 26

SOLUTIONS

function lowercaseCount(str){
    let res = 0;
    for(let i = 0; i < str.length; i++) {
      if (str[i].match(/[a-z]/)) {
      res += 1;
      }
    }
    return res;
}

// function lowercaseCount(str){
//     return (str.match(/[a-z]/g) || []).length
// }

// function lowercaseCount(str){
//     return str.replace(/[^a-z]/g, "").length;
// }

// function lowercaseCount(str){
//     return str.length - str.replace(/[a-z]/g, '').length;
// }