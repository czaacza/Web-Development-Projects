const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled);

const movies = [
  {
    title: "Amadeus",
    score: 75,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

const movieTitles = movies.map(function (movie) {
  return movie.title;
});

console.log(movieTitles);

// const movieTitlesOtherWay = [];
// for (let movie of movies) {
//   movieTitlesOtherWay.push(movie.title);
// }
// console.log(movieTitlesOtherWay);

// exercise
function cleanNames(array) {
  try {
    return array.map(function (word) {
      return word.trim();
    });
  } catch {
    console.log("cleanNames() requires a string to be passed.");
  }
}

const stringArray = [
  "Hello     ",
  "   World   ",
  "   How  ",
  "  Are",
  "   You",
];

console.log(cleanNames(stringArray));
