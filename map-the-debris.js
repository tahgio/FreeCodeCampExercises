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
