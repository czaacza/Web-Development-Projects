const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name} says MEOW`);
  },
};

const meow2 = cat.meow;

// exercise
const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};

console.log(hen.name); // "Helen"
console.log(hen.eggCount); // 0
console.log(hen.layAnEgg()); // "EGG"
console.log(hen.layAnEgg()); // "EGG"
console.log(hen.eggCount); // 2
