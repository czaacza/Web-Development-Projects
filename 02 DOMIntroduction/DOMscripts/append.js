// appendChild()

const newImg = document.createElement("img");
console.dir(newImg);
newImg.src = "https://img-ovh-cloud.zszywka.pl/1/0305/3417-animal-cute-dog.jpg";

document.body.appendChild(newImg);
newImg.classList.add("square");

const newH3 = document.createElement("h3");
newH3.innerText = "I am new";
document.body.appendChild(newH3);

// append()
const p = document.querySelector("p");
p.append("i am new text yeaaaaaaaaaa!!");

// prepend()
const newB = document.createElement("b");
newB.append("HI!");
p.prepend(newB);

// insertAdjacentElement()
const h2 = document.createElement("h2");
h2.append("Are adorable chickens");
const h1 = document.querySelector("#heading");
h1.insertAdjacentElement("afterend", h2);

const h3 = document.createElement("h3");
h3.innerText = "I am h3";
h1.after(h3);

// exercise
const container = document.querySelector("#container");
const buttonContainer = document.createElement("div");
container.appendChild(buttonContainer);
for (let i = 0; i < 100; i++) {
  newButton = document.createElement("button");
  newButton.append("Hey!");
  console.log(newButton.style);
  buttonContainer.appendChild(newButton);
}
