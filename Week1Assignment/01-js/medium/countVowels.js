/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    allvowels='aeiouAEIOU';
    count = 0;
    for (index in str){
      if (allvowels.includes(str[index])){
        count = count+1;
      } 
    }
    return count;
}
console.log(countVowels('a e i o u'));
module.exports = countVowels;