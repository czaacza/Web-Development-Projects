function makeRandColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const button = document.querySelector("#colorchange");
const container = document.querySelector("#container");

button.addEventListener("click", (e) => {
  container.style.backgroundColor = makeRandColor();
  e.stopPropagation();
});

container.addEventListener("click", () => {
  container.classList.toggle("hide");
});
