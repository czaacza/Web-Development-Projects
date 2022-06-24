const user = {
  email: "harvey@gmail.com",
  password: "sCoTt1948sMiTh",
  firstName: "Harvey",
  lastName: "milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an Amercian politican and the first openly",
  city: "San Franisco",
  state: "California:",
};

// function fullName(user) {
//   const { firstName, lastName } = user;
//   return `${firstName} ${lastName}`;
// }

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

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

movies.filter((movie) => {
  return movie.score >= 90;
});

movies.map(({ title, score, year }) => `${title}(${year}) is rated ${score}`);
