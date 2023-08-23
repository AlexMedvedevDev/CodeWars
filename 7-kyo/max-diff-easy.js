INSTRUCTIONS

// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.
// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

SOLUTIONS

function maxDiff(list) {
    if(!list.length) return 0;
    return Math.max(...list) - Math.min(...list);
};

// function maxDiff(list) {
//     return list.length ? Math.max(...list) - Math.min(...list) : 0;
// };

// const maxDiff = (arr) => arr.sort((a,b)=>a-b)[arr.length-1] - arr[0]  || 0;

// function maxDiff(list) {
//     // Infinity and -Infinity are values javascript provides, they are greater or smaller than any other value
//      let smallestValue = Infinity;
//      let biggestValue = -Infinity;
//      if(list.length === 0) return 0;
//      for (i=0; i < list.length; i++) {
//        if(list[i] > biggestValue) {
//          biggestValue = list[i];
//        }
//        if(list[i] < smallestValue) {
//          smallestValue = list[i];
//        }
//      }
//      return biggestValue - (smallestValue);
// };