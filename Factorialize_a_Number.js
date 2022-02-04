// Return the factorial of the provided integer.
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
   if (num == 0) {
     return 1;
   } else {
     return num * factorialize(num - 1)
   }
}

//console.log(factorialize(5));
