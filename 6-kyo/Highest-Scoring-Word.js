INSTRUCTIONS

Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.

SOLUTIONS

function high(x){
    console.log(x)
    x =   [...new Set(x.split(' '))].join(' ')
  
    function calculate(word){
      return word.split('').map((x,i)=> x = x.codePointAt()-96).reduce((acc,c)=>acc + c,0)
    }
    
  let highestScore = ''
    for(let i = 0 ; i < x.split(' ').length ; i++){
      if( highestScore < calculate(x.split(' ')[i]))
        highestScore = calculate(x.split(' ')[i])
        }
    
     for(let i = 0 ; i < x.split(' ').length ; i++){
      if( highestScore == calculate(x.split(' ')[i]))
        return x.split(' ')[i]
        }
}

// function high(s){
//     let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//     return s.split(' ')[as.indexOf(Math.max(...as))];
// }

// function high(x){
//     let alphabets = [
//       'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
//       'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
//     ];
    
//     let words = x.split(" ");
//     let highestScore = 0;
//     let highestScoreWord = "";
    
//     for (let word of words) {
//       let lettersSum = 0;
      
//       for (let letter of word) {
//         lettersSum += alphabets.indexOf(letter) + 1;
//       }
      
//       if (lettersSum > highestScore) {
//         highestScore = lettersSum;
//         highestScoreWord = word;
//       }
//     }
    
//     return highestScoreWord;
// }