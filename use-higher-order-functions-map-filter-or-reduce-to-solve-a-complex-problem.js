const squareList = arr => {
  // Only change code below this line
  return arr.filter(function a(b){return b % 1 == 0 && b > 0}).map(function a(b){return b**2});
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);

