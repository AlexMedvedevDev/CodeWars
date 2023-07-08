INSTRUCTIONS
// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
// Add the value "codewars" to the array websites 1,000 times.

SOLUTIONS

var websites = [];
for (i = 0; i < 1000; i++) {
   websites.push("codewars");
}

// var websites = [];
// let times = 1000;
// do {
//   times--;
//   websites.push("codewars");
// } while (times > 0);

// var websites = new Array(1000).fill("codewars");

// var websites = [];
// while (websites.length < 1000) websites.push("codewars")

// var websites = Array.from({ length: 1000 }, () => 'codewars')