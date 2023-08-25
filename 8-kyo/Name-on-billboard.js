INSTRUCTIONS

// You can print your name on a billboard ad. Find out how much it will cost you. 
// Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).
// You can not use multiplier "*" operator.
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 
// 20 leters * 30 = 600 (Space counts as a character).

SOLUTIONS

const billboard = (name, price = 30) => {
    let total = 0;
    let letter = 0;
    while(letter < name.length) {
      total += price;
      letter++;
    }  
    return total;
}

// function billboard(name, price = 30){
//     var totalCost = 0;
//     for(i=0; i<name.length; i++){
//         totalCost += price;
//     } 
//     return totalCost;
// }

// function billboard(name, price = 30) {
//     return name.split('').reduce((sum, letter) => sum + price, 0); 
// }