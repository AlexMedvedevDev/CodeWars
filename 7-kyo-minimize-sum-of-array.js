// Instructions
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Array/list will contain positives only .
// Array/list will always has even size
// Examples:
// minSum({5,4,2,3}) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
//
// Solution:
function minSum(arr) {
  arr = arr.sort((a,b) => a - b);
  // (a, b) => a - b --- you’re telling the .sort() function
  // to sort the numbers in ascending order
  let temp = 0;
  for(let i = 0; i < arr.length/2; i++)
    temp += arr[i] * arr[arr.length-i-1];
  return temp;
}

function minSum(arr) {
  var res=0;
  arr = arr.sort((a,b)=>a-b);

  while(arr.length){
    res += arr.pop()*arr.shift();
// The pop() method removes the last element from an array and returns that element.
// This method changes the length of the array.

// The shift() method removes the first element from an array and returns that removed element.
// This method changes the length of the array.
    }

  return res
}

function minSum(a) {
  return a.sort((a,b)=>a-b).reduce((s,x,i,a)=>s+x*a[a.length-i-1],0)/2
// The reduce() method executes a reducer function (that you provide) on each element of
// the array, resulting in single output value.
}

function minSum(arr) {
  return arr.sort( (a,b) => a-b )
            .slice(0, arr.length/2)
// The slice() method returns a shallow copy of a portion of an array into a new
// array object selected from start to end (end not included) where start and end represent the index of
// items in that array. The original array will not be modified.
            .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}
