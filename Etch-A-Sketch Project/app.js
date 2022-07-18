const container = document.querySelector(".container");
const inputColumn = document.querySelector(".input-holder-column");
const inputRow = document.querySelector(".input-holder-row");
const inputColor = document.querySelector(".color-input");
const colorfulButton = document.querySelector(".color-button");

let rows = 16;
let columns = 16;

inputColor.value = randomColor();
let actualColor = inputColor.value;
generateElements();

inputRow.addEventListener("click", function () {
  this.actualColor = undefined;
  generateElements();
});

inputColumn.addEventListener("click", function () {
  this.actualColor = undefined;
  generateElements();
});

inputRow.addEventListener("input", function () {
  if (this.value > 100) {
    this.value = this.value % 10;
    return;
  }
  rows = +this.value;
  generateElements();
});

inputColumn.addEventListener("input", function () {
  if (this.value > 100) {
    this.value = this.value % 10;
    return;
  }
  columns = +this.value;
  generateElements();
});

inputColor.addEventListener("input", function () {
  actualColor = inputColor.value;
  generateElements();
});

colorfulButton.addEventListener("click", function () {
  actualColor = undefined;
  generateElements();
});

function generateElements() {
  container.innerHTML = "";
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const div = document.createElement("div");
      div.classList.add("element");
      container.append(div);
      div.addEventListener(
        "mouseenter",
        function () {
          if (actualColor) {
            this.style.backgroundColor = actualColor;
          } else {
            this.style.backgroundColor = randomColor();
          }
          console.log(actualColor);
        },
        { once: true }
      );
    }
  }
}

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
