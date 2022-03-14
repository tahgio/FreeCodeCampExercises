//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
//The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//The values should be rounded to the nearest whole number. The body being orbited is Earth.
//The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

const GM = 398600.4418;
const earthRadius = 6367.4447;

function orbitalPeriod(arr) {
  const a = ({ name, orbitalPeriod }) => ({ name, orbitalPeriod});
  for (let i = 0; i< arr.length; i++){
    arr[i]["orbitalPeriod"] = Math.round(2*3.14159265358979323846264*(Math.sqrt(Math.pow((arr[i]['avgAlt'] + earthRadius),3)/GM)));
    arr[i] = a(arr[i]);
  }
  
  return arr
}

let x = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])


const a = ({ name, orbitalPeriod }) => ({ name, orbitalPeriod});
let t = 6.28318*(Math.sqrt(Math.pow((413.6 + earthRadius),3)/GM));
t = Math.round(t)
//console.log(t)

//413.6 = 5557

console.log(x);
