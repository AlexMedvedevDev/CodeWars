INSTRUCTIONS
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

SOLUTIONS
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// function highAndLow(numbers) {
//     numbers = numbers.split(' ').map(Number);
//     const max = Math.max(...numbers);
//     const min = Math.min(...numbers);
//     return `${max} ${min}`;
// }