/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  console.log(str1, str2);
  if (str1.length != str2.length){
    return false;
  }
  else {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    sortedstr1 = str1.split("").sort().join("");
    sortedstr2 = str2.split("").sort().join("");
    console.log(sortedstr1, sortedstr2);
    if (sortedstr1 == sortedstr2){
      return true;
    }
    else {
      return false;
    }
  }
}
answer = isAnagram("hello", "Ohell")
console.log(answer)
module.exports = isAnagram;
