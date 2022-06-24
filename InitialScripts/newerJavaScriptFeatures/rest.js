function sum(...nums) {
  return nums.reduce((total, num) => total + num);
}

function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO ${gold}`);
  console.log(`SILVER MEDAL GOES TO ${silver}`);
  console.log(`NO MEDALS GO TO ${everyoneElse}`);
}
