/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/\s[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
  // str = str.replace(/ /g, "");
  console.log(str);
  const len = str.length;
  if (len<2){
    return true;
  }
  let n = len-1;
  for (i=0; i<len/2; i++){
    if(str[i] != str[n]){
      return false
    }
    else{
      n = n-1;
    }
    return true
  }
}
console.log(isPalindrome("awa!"))
module.exports = isPalindrome;
