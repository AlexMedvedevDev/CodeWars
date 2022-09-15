// Task
// The function travel will take two parameters r (addresses' list of all clients' as
// a string) and zipcode and returns a string in the following zipcode:street and town,street and town,.../house number,house number,...

// The street numbers must be in the same order as the streets where they belong.
// If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"
//Solutions:
function travel(r, zipcode) {
  re = RegExp('(\\d+)\\s+(.+)\\s+' + zipcode + '$');
  // 1-house: a group of digits, a whitespace;
  // 2-street: any symbols, a whitespace;
  // 3-store those symbols, than zipcode and end an RegExp
  addr = r.split`,`
    .map(r => r.match(re))
    //compare elemenst and a RegExp pattern
    .filter(r => r);
  //filter empty records (without zipcode) which equals null
  return `${zipcode}:${addr.map(r => r[2])}/${addr.map(r => r[1])}`;
}
