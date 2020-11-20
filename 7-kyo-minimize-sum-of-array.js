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
    }

  return res
}

function minSum(a) {
  return a.sort((a,b)=>a-b).reduce((s,x,i,a)=>s+x*a[a.length-i-1],0)/2
}

function minSum(arr) {
  return arr.sort( (a,b) => a-b )
            .slice(0, arr.length/2)
            .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}
