// 1
function capitalize(word) {
  let newWord = word[0].toUpperCase() + word.slice(1);
  return newWord;
}
console.log(capitalize("eggplant"));

// 2
function returnDay(number) {
  switch (number) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return null;
  }
}
console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));

// 3
function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  } else {
    return false;
  }
}

console.log(isShortsWeather(80));
console.log(isShortsWeather(48));
console.log(isShortsWeather(75));

// 4
function lastElement(array) {
  if (array.length == 0) {
    return null;
  }
  return array[array.length - 1];
}

console.log(lastElement([3, 5, 7])); //7
console.log(lastElement([1])); //1
console.log(lastElement([])); //null

// 5
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

// 6
function sumArray(array) {
  let total = 0;
  for (num of array) {
    total += num;
  }
  return total;
}

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([2, 2, 2, 2])); // 8
console.log(sumArray([50, 50, 1])); // 101
