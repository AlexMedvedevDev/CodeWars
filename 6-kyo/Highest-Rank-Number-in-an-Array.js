INSTRUCTIONS

// Complete the method which returns the number which is most frequent in the given input array. 
// If there is a tie for most frequent number, return the largest number among them.
// Note: no empty arrays will be given.
// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

SOLUTIONS

function highestRank(arr){
    var hash={}
    for(let i=0;i<arr.length;i++){
      if(hash[arr[i]]) hash[arr[i]]++
      else
        hash[arr[i]]=1
    }
    var countMax=0;
    var valueMax=0;
    for(element in hash){
        if(countMax<=hash[element]){
            valueMax=Math.max(element,valueMax)
            countMax=Math.max(hash[element],countMax)
        }
    }
    return valueMax
}

// function highestRank(arr){
//     return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
// }

// function highestRank(arr){
//     var high,max=0,rec={}
//     for(var x of arr){
//       rec[x]=(rec[x]||0)+1
//       if(rec[x]>max){
//         max=rec[x]
//         high=x
//       }
//     }
//     return high
// }

