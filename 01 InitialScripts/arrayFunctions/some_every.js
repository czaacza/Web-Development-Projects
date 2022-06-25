const exams = [80, 98, 92, 78, 70, 90, 89, 84, 81, 77];

console.log(exams.every((score) => score >= 75));
console.log(exams.some((score) => score >= 75));

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

console.log(movies.some((movie) => movie.year > 2010));

// exercise
const allEvens = (array) => {
  return array.every((num) => num % 2 === 0);
};

console.log(allEvens([2, 4, 6, 8])); //true
console.log(allEvens([1, 4, 6, 8])); //false
console.log(allEvens([1, 2, 3])); //false
