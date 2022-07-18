// adding classes

const h2 = document.querySelector("h2");
console.log(h2.classList);
h2.classList.add("purple");
h2.classList.add("border");

h2.classList.remove("border");

h2.classList.toggle("purple");
h2.classList.toggle("border");

// exercise
const listItems = document.querySelectorAll("ul li");
for (let item of listItems) {
  item.classList.toggle("highlight");
}
