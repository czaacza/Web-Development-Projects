let greet = function () {
  console.log("HI");
};

function callTwice(func) {
  func();
  func();
}

const callTenTimes = function (f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
};

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);

callTenTimes(rollDie);
