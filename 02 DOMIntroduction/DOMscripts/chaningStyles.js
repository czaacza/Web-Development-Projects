// not prefered way to change elements styles
// change inline styles of the element

const h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.fontSize = "75px";
h1.style.border = "2px solid black";
console.log(h1.style.color);

const allLinks = document.querySelectorAll("a");
for (let link of allLinks) {
  link.style.color = "#006c21";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

// better way - change classes of the element
console.log(window.getComputedStyle(h1).color);
console.log(window.getComputedStyle(h1).fontSize);
console.log(window.getComputedStyle(h1).fontFamily);
console.log(window.getComputedStyle(h1).margin);

// exercise
const container = document.querySelector("#container");
container.style.textAlign = "center";
const image = document.querySelector("img");
image.style.width = "150px";
image.style.borderRadius = "50%";
