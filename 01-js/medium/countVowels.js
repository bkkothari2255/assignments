/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowels = 'aeiou';
    let vowelCount = 0;
    str.toLowerCase().split('').forEach((char) => {
       if(vowels.includes(char)) vowelCount += 1;
    })
    return vowelCount;
}

module.exports = countVowels;