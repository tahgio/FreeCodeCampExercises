//* Return true if the given string is a palindrome. Otherwise, return false. 
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

const regex = /[!"\s#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function palindrome(str) {
  str = str.toLowerCase().replace(regex,"");
  let revstr = str.split("").reverse().join().replace(regex,"");
return str === revstr;
}

// console.log(palindrome("never odd or even"));
