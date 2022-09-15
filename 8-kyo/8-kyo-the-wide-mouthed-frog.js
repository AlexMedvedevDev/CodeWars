// Your goal in this kata is to create complete the mouth_size method this
// method take one argument animal which corresponds to the animal encountered
// by frog. If this one is an alligator (case insensitive) return small otherwise return wide.
//Solutions.

// function mouthSize (animal) {
//     if (animal.toLowerCase() === "alligator") {
//     return "small"} else
//     {return "wide"}
// }

function mouthSize(animal) {
  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
}
