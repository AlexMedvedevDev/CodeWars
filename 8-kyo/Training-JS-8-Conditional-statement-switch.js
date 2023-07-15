INSTRUCTIONS

// Complete the function howManydays. 
// It accepts 1 parameter month, which means the month of the year. 
// Different months have a different number of days as shown in the table below. 
// Return the number of days that are in month. 
// There is no need for input validation: 
// month will always be greater than 0 and less than or equal to 12

INSTRUCTIONS
function howManydays(month){
    var days;
    switch (month){
      case 1:
        days = 31;
        break;
      case 3:
        days = 31;
        break;
      case 5:
        days = 31;
        break;
      case 7:
        days = 31;
        break;
      case 8:
        days = 31;
        break;
      case 10:
        days = 31;
        break;
      case 12:
        days = 31;
        break;
      case 4:
        days = 30;
        break;
      case 6:
        days = 30;
        break;
      case 9:
        days = 30;
        break;
      case 11:
        days = 30;
        break;
      case 2:
        days = 28;
        break;
    }
    return days;
}

// function howManydays(month){
//     switch (month){
//        case 2: return 28
//        case 4:
//        case 6:
//        case 9:
//        case 11: return 30
//     }
//     return 31
// }

// function howManydays(month){
//     switch ( month ){
//       case 2 : return 28
//       case 4: case 6: case 9: case 11: return 30
//       default: return 31
//     }
// }