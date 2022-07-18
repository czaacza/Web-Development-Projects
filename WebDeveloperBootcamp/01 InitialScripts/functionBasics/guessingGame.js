let maxNumber = prompt("Enter max number");
let genNumber = Math.floor(Math.random() * maxNumber) + 1;
console.log(genNumber);

let guessNumber = prompt("Enter first number");

let counter = 0;

while (guessNumber != genNumber) {
  counter++;
  if (guessNumber > genNumber) {
    guessNumber = prompt("Too much. Guess again.");
  } else if (guessNumber < genNumber) {
    guessNumber = prompt("Too low. Guess again.");
  } else {
    break;
  }
}

if (!isNaN(guessNumber)) {
  console.log("Congrats. It took you " + counter + " guesses to win.");
}
