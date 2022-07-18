// onclick property

const btn = document.querySelector("#v2");
console.dir(btn);

btn.onclick = () => {
  console.log("you clicked me!!");
  console.log("i hope it worked!!");
};

function scream() {
  console.log("AAAAAAAAAA");
  console.log("stop touching me!!");
}

btn.onmouseenter = scream;

h1 = document.querySelector("h1").onclick = () => {
  alert("you clicked me hm");
};

// addEventListener
const btn3 = document.querySelector("#v3");
btn3.addEventListener("mouseup", () => {
  alert("Button 3 clicked!");
});

function twist() {
  console.log("TWIST!");
}

function shout() {
  console.log("SHOUT!");
}

const tasButton = document.querySelector("#tas");
tasButton.onclick = twist;
tasButton.onclick = shout;

// in addEventListener we can run more than one function on one propety
tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);

// exercise

const helloButton = document.querySelector("#hello");
const goodbyeButton = document.querySelector("#goodbye");

helloButton.addEventListener("click", () => {
  console.log("hello");
});

goodbyeButton.addEventListener("click", () => {
  console.log("goodbye");
});

// changing buttons display to block
const allButtons = document.querySelectorAll("button");
for (let button of allButtons) {
  button.style.display = "block";
  button.style.margin = "10px 0";
}
const allLinks = document.querySelectorAll("a");
for (let link of allLinks) {
  link.style.display = "block";
  link.style.margin = "10px 0";
}
