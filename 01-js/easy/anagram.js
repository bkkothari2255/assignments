/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if(str1.length != str1.length) return false;
    var str1A = str1.toLowerCase().split("").sort().join('');
    var str2B = str2.toLowerCase().split("").sort().join('');
    if(str1A==str2B) return true;
    return false;
}

module.exports = isAnagram;
