INSTRUTIOCNS
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"

SOLUTIONS
function areYouPlayingBanjo(name) {
    if (name.toLowerCase().charAt(0) == 'r'){
      name = name + ' plays banjo';
    }else{
      name = name + ' does not play banjo';
    }
    return name;
}

// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }

// function areYouPlayingBanjo(name) {
//     // Implement me
//     if (name[0] == 'R' || name[0] == 'r')
//       return name + " plays banjo";
//     else
//       return name + " does not play banjo";
// }