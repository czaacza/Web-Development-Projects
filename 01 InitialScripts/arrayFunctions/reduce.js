const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// sum an array
const total = prices.reduce((total, price) => {
  return total + price;
});

// find min element
const minPrice = prices.reduce((minimum, price) => {
  if (price < minimum) {
    return price;
  } else {
    return minimum;
  }
});

// find max rated movie
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

const maxRatedMovie = movies.reduce((maxRated, movie) => {
  if (movie.score > maxRated.score) {
    return movie;
  } else {
    return maxRated;
  }
});

// setting a starting point to reduce() (second argument)
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100);
