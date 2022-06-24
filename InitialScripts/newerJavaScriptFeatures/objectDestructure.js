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

// const email = user.email;
const { email, firstName, lastName, bio } = user;
console.log(email, firstName, lastName, bio);

const { born: birthYear, died: deathYear } = user;
console.log(birthYear, deathYear);

const { city = "Milanówek", state = "mazowieckie", shoeSize = 0 } = user;
console.log(city, state, shoeSize); // undefined
