INSTRUCTIONS

// Write a function that returns a string in which firstname is swapped with last name.
// Example(Input --> Output)
// "john McClane" --> "McClane john"

SOLUTIONS

function nameShuffler(str){
    let split = str.split(" ");
      return split[1] + " " + split[0];
}

function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
}