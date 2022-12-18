// You are provided with an array, possibleIterable. Using a for loop, build out the object divByThree so that each key is an element of possibleIterable that is divisible by three. The value of each key should be the array index at which that key can be found in possibleIterable.

const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE

for (let x = 0 ; x <= possibleIterable.length ; x++){
  if (possibleIterable[x] %3 ===0)
  {
    divByThree[possibleIterable[x]] = x;
  }
}

console.log(divByThree);