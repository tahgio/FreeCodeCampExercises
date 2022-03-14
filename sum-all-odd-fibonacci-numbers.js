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