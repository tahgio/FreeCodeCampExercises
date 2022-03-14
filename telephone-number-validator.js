//let regex = 

function telephoneCheck(str) {
  let regex = /(^1{0,1}\s?\(\d{3}\)\s?\d{3}\-?\d{4}$|^1{0,1}\s?\d{3}\s?\-?\d{3}\s?\-?\d{4}$)/
  return regex.test(str);
}

telephoneCheck("555-555-5555");

console.log(telephoneCheck("1 (555) 555-5555"))