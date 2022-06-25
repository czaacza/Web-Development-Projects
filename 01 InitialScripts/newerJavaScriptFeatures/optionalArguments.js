// old version

// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }

// newer version
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

// the optional argument should be placed AFTER unoptional arguments
function greet(person, msg = "Hey there") {
  return `${msg}, ${person}`;
}
