//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.



function sumFibs(num) {
  let narr = [1];
  let i = 1;
  while (i<=num){
    narr.push(i);
    i = i + narr[narr.length-2];
  }
  return narr.filter((e)=> e%2 == 1).reduce((tot,cur)=> tot+=cur);
}

let x = sumFibs(75025);

console.log(x);
