let p1Points = 0;
let p2Points = 0;
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");

const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");

const select = document.querySelector("#playto");

p1Button.addEventListener("click", addP1Point);
p2Button.addEventListener("click", addP2Point);
resetButton.addEventListener("click", resetPoints);

function addP1Point() {
  p1Points++;
  p1Display.innerText = p1Points;
  if (p1Points >= select.value) {
    disableButtons();
    p1Display.style.color = "green";
    p2Display.style.color = "red";
  }
}
function addP2Point() {
  p2Points++;
  p2Display.innerText = p2Points;
  if (p2Points >= select.value) {
    disableButtons();
    p1Display.style.color = "red";
    p2Display.style.color = "green";
  }
}
function resetPoints() {
  p1Points = 0;
  p2Points = 0;
  p1Display.innerText = "0";
  p2Display.innerText = "0";
  enableButtons();
  p1Display.style.color = "#363636";
  p2Display.style.color = "#363636";
}

function enableButtons() {
  p1Button.disabled = false;
  p2Button.disabled = false;
  p1Button.classList.remove("disabled");
  p2Button.classList.remove("disabled");
}

function disableButtons() {
  p1Button.disabled = true;
  p2Button.disabled = true;
  p1Button.classList.add("disabled");
  p2Button.classList.add("disabled");
}
