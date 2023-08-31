INSTRUCTIONS

// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

SOLUTIONS

function sortGiftCode(code){
    return code.split("")
               .sort()
                .join("")
}

// function sortGiftCode(code){
//     return code.split('').sort().join('');
// }

// function sortGiftCode(code){
//     return [...code].sort().join``
// }