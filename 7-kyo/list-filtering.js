INSTRUCTIONS
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

SOLUTIONS
function filter_list(l) {
    return l.filter(e => typeof(e) !== 'string');
}

// function filter_list(l) {
//     return l.filter(e => Number.isInteger(e));
// }

// function filter_list(l) {
//     var res = [];
//                 for(var item=0;item<l.length;item++)
//                 {
//                     if (typeof l[item] === "number")
//                     {
//                         res.push(l[item]);
//                     }
//                 }
//                 return res;
// }

// const filter_list = l => l.filter(n => n === +n)