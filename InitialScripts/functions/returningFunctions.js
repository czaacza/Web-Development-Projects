function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("CONGRATS, I AM A GOOD FUNCTION");
      console.log("YOU WIN A MILLION DOLLARS!!");
    };
  } else {
    return function () {
      console.log("I AM A BAD FUNCTION.");
      console.log("BUT NOTHING WRONG WILL HAPPEN.");
    };
  }
}

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);
// function isBetween(min, max) {
//   return num >= min && num <= max;
// }
