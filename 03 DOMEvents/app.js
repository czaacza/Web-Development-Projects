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
