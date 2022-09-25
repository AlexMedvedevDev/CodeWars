INSTRUCTIONS
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

SOLUTIONS
function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}

// function validatePIN (pin) {
//     var pinlen = pin.length;
//     var isCorrectLength = (pinlen == 4 || pinlen == 6);
//     var hasOnlyNumbers = pin.match(/^\d+$/);
      
//     if(isCorrectLength && hasOnlyNumbers){
//       return true;
//     }
//     return false;
// }

// function validatePIN (pin) {
//     var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
//     return reg.test(pin);
// }

// function validatePIN (pin) {
//     let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     let count = 0;
//     let pinArr = pin.split('');
//     for (let i of pinArr) {
//       if (num.includes(i)) {
//         count += 1;
//       } else {
//         return false;
//       }
//     }
//     return count == 4 || count == 6;
// }