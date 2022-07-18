// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector(".container");

let linkBegin =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 898; i++) {
  const pokemon = document.createElement("div");

  const img = document.createElement("img");
  img.src = linkBegin + i + ".png";
  console.log(img);
  img.style.width = "75px";
  img.style.display = "block";

  const label = document.createElement("span");
  label.innerText = `${i}`;

  pokemon.appendChild(img);
  pokemon.appendChild(label);

  pokemon.style.textAlign = "center";
  pokemon.style.display = "inline-block";
  container.appendChild(pokemon);
}
