function rollDye(numberOfSites) {
  return Math.floor(Math.random() * numberOfSites) + 1;
}
function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}

function greet(firstName, lastName) {
  console.log(`Hello, ${firstName + " " + lastName}`);
}

function greet(firstName, lastName, age) {
  console.log(
    `Hello, ${firstName + " " + lastName}, you are ${age} years old.`
  );
}

let dye1 = rollDye(6);
let dye2 = rollDye(20);
let dye3 = rollDye(123);
let dye4 = rollDye(88);

greet("Mateusz", "Czarnecki");
