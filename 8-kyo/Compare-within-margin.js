INSTRUCTIONS

// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. 
// The function should return whether a is lower than, close to, or higher than b.
// a is considered "close to" b if margin is greater than or equal to the distance between a and b.
// Please note the following:
// When a is close to b, return 0.
// Otherwise...
// When a is less than b, return -1.
// When a is greater than b, return 1.
// If margin is not given, treat it as zero.
// Assume: margin >= 0
// Tip: Some languages have a way to make parameters optional.

SOLUTIONS

function closeCompare(a, b, margin) {
    if (!margin) {
      //When a is lower than b, return -1.
      if (a < b) return -1;
      //When a is higher than b, return 1.
      if (a > b) return 1;
      // for a === b return should be 0.
      if (a === b) return 0;
    } else {
      //When a is close to b, return 0 | close to ==> margin >= a - b
      if (margin >= Math.abs(a - b) || a === b) return 0;
      if (a < b) return -1;
      if (a > b) return 1;
    }
    // margin >= 0, if not provided margin === 0
}

// function closeCompare(a, b, m = 0){
//     return Math.abs(a - b) <= m? 0: Math.sign(a - b);
// }

// function closeCompare(a, b, margin = 0) {
//     if (a < b - margin) return -1;
//     if (a - margin > b) return 1;
//     return 0;
// }

// function closeCompare(a, b, margin = 0) {
//     return Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1;
// }