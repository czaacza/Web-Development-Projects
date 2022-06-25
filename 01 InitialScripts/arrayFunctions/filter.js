const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const filtered = numbers.filter((n) => {
  return n < 10;
});

const movies = [
  {
    title: "Amadeus",
    score: 75,
    year: 1975,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 2011,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2004,
  },
  {
    title: "Alien",
    score: 90,
    year: 2002,
  },
  {
    title: "13 Going on 30",
    score: 35,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
];

const bestRated = movies.filter((movie) => movie.score > 80);
const worstRated = movies.filter((movie) => movie.score < 70);
const recentMovies = movies.filter((movie) => movie.year > 2000);

// filter + map
const goodTitles = bestRated.map((movie) => movie.title);

// exercise
function validUserNames(array) {
  return array.filter((username) => username.length < 10);
}

console.log(
  validUserNames([
    "mark",
    "staceysmom1978",
    "q29832128238983",
    "carrie98",
    "MoanaFan",
  ])
);

// => ["mark", "carrie98", "MoanaFan"]
