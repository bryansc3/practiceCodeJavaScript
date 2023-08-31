function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let array=[];
  for(let i=0; i<arr.length; i++){
    let T=Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt,3)/GM));
    array.push({name: arr[i].name, orbitalPeriod: T});
  }
  return array;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
