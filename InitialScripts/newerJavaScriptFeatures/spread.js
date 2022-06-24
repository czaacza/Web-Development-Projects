// spread with functions
const nums = [13, 4, 5, 21, 3, 3, 1, 2, 92];

console.log(Math.max(...nums));
console.log(Math.min(...nums));

console.log(nums);
console.log(...nums);

console.log("hello");
console.log(..."hello");

// spread with arrays
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs, "Speedy"];
console.log(allPets);

// spread with objects
const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  isFurry: true,
  family: "Caninae",
};

const felineCopy = { ...feline, color: "black" };

const catDog = {
  ...feline,
  ...canine,
};

console.log(catDog);

const dataFromForm = {
  email: "blueman@gmail.com",
  password: "tobias123!",
  username: "tfunke",
};

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };
