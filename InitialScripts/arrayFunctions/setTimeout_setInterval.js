setTimeout(() => {
  console.log("HELLO!");
}, 3000); // wywoluje funkcje w 1 argumencie po czasie podanym w 2 argumencie

console.log("GOODBYE!");

const id = setInterval(() => {
  console.log(Math.random());
}, 2000);

console.log("show this msg");
setTimeout(() => {
  clearInterval(id);
  console.log("Interval " + id + " cleared.");
}, 4000);
