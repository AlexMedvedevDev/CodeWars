INSTRUCTIONS
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.

SOLUTION
function otherAngle(a, b) {
    return 180 - (a+b);
}