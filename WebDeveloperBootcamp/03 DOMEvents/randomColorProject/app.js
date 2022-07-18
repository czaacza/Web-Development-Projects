function makeRandColor() {
  let firstNum = Math.floor(Math.random() * 255);
  let secondNum = Math.floor(Math.random() * 255);
  let thirdNum = Math.floor(Math.random() * 255);
  let code = `rgb(${firstNum},${secondNum},${thirdNum})`;
  console.log(code);
  text.innerText = code;
  document.body.style.backgroundColor = code;
}
const btn = document.querySelector("button");
btn.addEventListener("click", makeRandColor);

const text = document.querySelector("#code");
