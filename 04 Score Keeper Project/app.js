let p1Points = 0;
let p2Points = 0;
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");

const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");

p1Button.addEventListener("click", addP1Point);
p2Button.addEventListener("click", addP2Point);
resetButton.addEventListener("click", resetPoints);

function addP1Point() {
  p1Points++;
  p1Display.innerText = p1Points;
}
function addP2Point() {
  p2Points++;
  p2Display.innerText = p2Points;
}
function resetPoints() {
  p1Points = 0;
  p2Points = 0;
  p1Display.innerText = "0";
  p2Display.innerText = "0";
}
