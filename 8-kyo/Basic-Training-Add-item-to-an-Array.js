INSTRUCTIONS

// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]
// The websites array has already been defined for you using the following code:
// var websites = [];

SOLUTIONS

websites.push("codewars");
websites[0]="codewars";
websites.unshift("codewars");
websites.splice(0,0,"codewars");
{ websites.length=1; websites.fill("codewars"); }