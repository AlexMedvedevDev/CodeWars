INSTRUCTIONS
/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
Hint: Don't forget to check for bad values like null/undefined
*/

SOLUTIONS
function countSheeps(arrayOfSheep) {
    let sheep = 0;
    for(let sheeps of arrayOfSheep){
      if(sheeps == true) {
        sheep++;
      }
    }
    return sheep;
}

// function countSheeps(arrayOfSheeps) {
//     return arrayOfSheeps.filter(Boolean).length;
// }

// const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;