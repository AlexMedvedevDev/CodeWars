// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case
//Solutions

function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
} //The Set object lets you store unique values of any type,
//whether primitive values or object references. Set() creates a new Set object.
//Set.size The default value of the size property is 0.
