const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

// for (let person in testScores) {
//   console.log(`${person} scored ${testScores[person]} points`);
// }

// const entries = Object.entries(testScores);
// for (pair of entries) {
//   console.log(pair[0] + " scored " + pair[1] + " points");
// }
let sum = 0;
for (let score of Object.values(testScores)) {
  sum += score;
}
let avg = sum / Object.values(testScores).length;
console.log(`Avarage = ${avg}`);
