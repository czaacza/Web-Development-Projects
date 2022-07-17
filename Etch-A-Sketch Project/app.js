const container = document.querySelector(".container");
const inputColumn = document.querySelector(".input-holder-column");
const inputRow = document.querySelector(".input-holder-row");

let rows = 16;
let columns = 16;

generateElements();

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

inputRow.addEventListener("input", function () {
  if (this.value > 50) {
    this.value = this.value % 10;
    return;
  }
  rows = +this.value;
  generateElements();
});

inputColumn.addEventListener("input", function () {
  if (this.value > 50) {
    this.value = this.value % 10;
    return;
  }
  columns = +this.value;
  generateElements();
});

function generateElements() {
  container.innerHTML = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const div = document.createElement("div");
      div.classList.add("element");
      container.append(div);
      div.addEventListener(
        "mouseenter",
        function () {
          this.style.backgroundColor = randomColor();
        },
        { once: true }
      );
    }
  }
}
