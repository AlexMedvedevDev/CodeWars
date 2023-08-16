INSTRUCTIONS

// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.
// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

SOLUTIONS

function remove(s,n){
    let input = s;
    while (n) {
      input = input.replace(/!/, "");
      n-=1;
    }
      return input;
}

// function remove(s,n){
//     for (var i=0;i<n;i++) s=s.replace("!","");
//     return s;
// }

// const remove = (s, n) =>
//   s.replace(/!/g, val => n-- > 0 ? `` : val);

// function remove(s,n){
//     return s.split('').filter(c => c != '!' || n-- <= 0).join('');
// }