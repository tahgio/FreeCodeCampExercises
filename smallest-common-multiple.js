function smallestCommons(arr) {
  const [min, max] = arr.sort((a,b)=>a-b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  const gcd = (a,b) => (b===0)? a : gcd(b,a%b);
  const lcm = (x,y) => (x*y)/gcd(x,y);
  return range.reduce((multiple, curr)=>lcm(multiple,curr));
}

let x = smallestCommons([23,18]);

console.log(x);