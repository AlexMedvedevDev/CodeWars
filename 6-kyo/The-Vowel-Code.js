INSTRUCTIONS

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". 
// There is no need to worry about uppercase vowels in this kata.
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
// For example, decode("h3 th2r2") would return "hi there".
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

SOLUTIONS

function encode(string) {
    let vowelSet = ['a', 'e', 'i', 'o', 'u'];
    let stringArr = string.split('')
    returnArr=[]
    stringArr.map(function(e){
      if (vowelSet.includes(e)){
        if (e == 'a'){
          returnArr.push(1)
        }
        if (e == 'e'){
          returnArr.push(2)
        }
        if (e == 'i'){
          returnArr.push(3)
        }
        if (e == 'o'){
          returnArr.push(4)
        }
        if (e == 'u'){
          returnArr.push(5)
        }
      } else {
        returnArr.push(e)
      }
    })
  
    return returnArr.join("")
  }
  
  function decode(string) {
    let numSet = [1, 2, 3, 4, 5];
    let stringArr = string.split('')
    console.log(stringArr)
    returnArr=[]
    stringArr.map(function(e){
      parseInt(e)
      
      if (numSet.includes(parseInt(e))){
        if (parseInt(e) == 1){
          returnArr.push('a')
        }
        if (parseInt(e)  == 2){
          returnArr.push('e')
        }
        if (parseInt(e)  == 3){
          returnArr.push('i')
        }
        if (parseInt(e)  == 4){
          returnArr.push('o')
        }
        if (parseInt(e)  == 5){
          returnArr.push('u')
        }
      } else {
        returnArr.push(e)
      }
    })
    return returnArr.join("")
}

// function encode(string){
//     return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
//   }
// function decode(string){
//     return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
//   }

// const obj = {a: 1, e: 2, i: 3, o: 4, u: 5};
// const encode = string =>
//     string.replace(/[aeiou]/g, val => obj[val]);
// const decode = string =>
//     string.replace(/[1-5]/g, val => Object.keys(obj)[--val]);