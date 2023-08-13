INSTRUCTIONS

// For this problem you must create a program that says who ate the last cookie. 
// If the input is a string then "Zach" ate the cookie. 
// If the input is a float or an int then "Monica" ate the cookie. 
// If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

SOLUTIONS

function cookie(x){
    if(typeof(x) === "string") return "Who ate the last cookie? It was Zach!";
    if(typeof(x) === "number") return "Who ate the last cookie? It was Monica!";
    else return "Who ate the last cookie? It was the dog!";
}

// function cookie(x) {
//     var t = typeof x
//     var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
//     return `Who ate the last cookie? It was ${who}!`
// }

// function cookie(x){
//     return `Who ate the last cookie? It was ${({string: "Zach", number: "Monica"}[typeof x] || "the dog")}!`;
// }

// function cookie(x){
//     return typeof x == "string" ? "Who ate the last cookie? It was Zach!" : typeof x == "number" ? "Who ate the last cookie? It was Monica!" : "Who ate the last cookie? It was the dog!";
// }

// function cookie(x){
//     var resultString = "Who ate the last cookie? It was "
//       switch (typeof x){
//         case "string": return resultString += "Zach!";
//         case "number": return resultString += "Monica!";
//         default: return resultString += "the dog!";
//       }
// }