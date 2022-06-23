// const add = function(x,y){
//   return x + y;
// }

const add = (x, y) => {
  return x + y;
};

console.log(add(1, 6));

const square = (a) => {
  return a ** 2;
};

console.log(square(9));

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log(rollDie());

// exercise
const greet = (name) => {
  return "Hey " + name + "!";
};

console.log(greet("Hagrid")); //"Hey Hagrid!"
console.log(greet("Luna")); //"Hey Luna!"
