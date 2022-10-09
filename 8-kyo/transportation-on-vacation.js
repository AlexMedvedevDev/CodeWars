INSTRUCTIONS
/*
Every day you rent the car costs $40. 
If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).
*/

SOLUTIONS
function rentalCarCost(d) {
    return d >= 7 ? d * 40 - 50 : (d>=3 ? d * 40 - 20 : d * 40);
}

// const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

// function rentalCarCost(d) {
//     if(d<3) return d * 40;
//     if(7>d && d>=3) return (d*40 -20);
//     if(d>=7) return (d*40 -50);
// }